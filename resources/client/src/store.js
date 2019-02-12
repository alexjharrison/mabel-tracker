import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: "",
    user: {}
  },
  mutations: {
    setJwt(state, newToken) {
      state.jwtToken = newToken;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {}
});
