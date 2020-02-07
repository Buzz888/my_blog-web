import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';
//components
import './components/component'

Vue.config.productionTip = true
Vue.prototype.$http = http
const createApp = (context) => {
  const router = createRouter();
  const store = createStore();
  sync(store, router);
  const app = new Vue({
    data: { url: context ? context.url : '' },
    router,
    store,
    render: h => h(App),
  });
  return { app, router, store };
};
//plugin
import http from './plugin/http'
import './plugin/content.scss'
import './plugin/style.scss'
//icon
import './assets/font/iconfont.css'
//hl
import hljs from "highlight.js";
import "./plugin/arduino-light.css";
Vue.prototype.$highlightCode = () => {
  const preEl = document.querySelectorAll("pre");

  preEl.forEach(el => {
    hljs.highlightBlock(el);
  });
};
export { createApp };
