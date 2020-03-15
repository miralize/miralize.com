import Vue from 'vue';
import Vuex from 'vuex';
import recentTracks from './modules/recentTracks';

console.log('recentTracks:', recentTracks);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    recentTracks,
  },
});
