import createCrudModule from 'vuex-crud';
import Axios from 'axios';

export default createCrudModule({
  resource: 'recentTracks',
  urlRoot: '/.netlify/functions/recentTracks',
  client: Axios,
  parseList: (response) => ({
    data: response.data.recentTracks,
  }),
  // only: ['FETCH_LIST'],
});
