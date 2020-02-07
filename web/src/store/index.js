import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const createStore = () => {
  const store = new Vuex.Store({
    state: {
      menu: true,
      title: '',
      md: '',
      loading:false
    },
    mutations: {
      setmenu(state) { state.menu = !state.menu },
      settitle(state, res) { state.title = res },
      setmd(state, res) { state.md = res;state.loading=false }
    },
    actions: {
      //title
      async gettitle({ commit }) {
        let res =null;
        let path = null;
        this.state.route.params.id? path = `/${this.state.route.path.match(/(\/\w{1,})/)[0].slice(1)}` : path = this.state.route.path
        res = await Vue.prototype.$http.get(`api/web/menu${path}`)
        return commit('settitle', res.data)
      },
      //md
      async getmd({ commit, state }) {
        state.loading = true
        if (state.route.params.id) {
          const res = await Vue.prototype.$http.get(`/app/${state.route.params.id}`)
          return commit('setmd', res.data)
        }
      }
    }
  });

  return store;
};

export { createStore };
