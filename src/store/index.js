import { createStore } from 'vuex';
import recentTracks from './modules/recentTracks';
import topAlbums from './modules/topAlbums';

const store = createStore({
  modules: {
    recentTracks,
    topAlbums,
  },
});

export default store;
