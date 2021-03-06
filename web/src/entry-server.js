// runs on server only

import { createApp } from './main';
 
// eslint-disable-next-line arrow-body-style
export default (context) => {
  // since there could potentially be asynchronous route hooks or components,
  // we will be returning a Promise so that the server can wait until
  // everything is ready before rendering.
  return new Promise((resolve, reject) => {
    const { app, router ,store} = createApp();

    // set server-side router's location
    router.push(context.url);

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      // This `rendered` hook is called when the app has finished rendering
      // After the app is rendered, our store is now
      // filled with the state from our components.
      // When we attach the state to the context, and the `template` option
      // is used for the renderer, the state will automatically be
      // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
      // eslint-disable-next-line no-param-reassign, no-return-assign
      // context.rendered = () => context.state = store.state;
      // no matched routes, reject with 404
      const matchedComponents = router.getMatchedComponents();
      if (matchedComponents.length === 0) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 });
      }
      Promise.all(matchedComponents.map(component =>{
        if(component.serverRequest){
          return component.serverRequest(store)
        }
      })).then(()=>{
        context.state = store.state;
        resolve(app)
      }).catch(reject)
      // the Promise should resolve to the app instance so it can be rendered
      // return resolve(app);
    }, reject);
  });
};
