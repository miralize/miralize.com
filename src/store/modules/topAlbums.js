import createCrudModule from 'vuex-crud';
import Axios from 'axios';

export default createCrudModule({
  resource: 'topAlbums',
  urlRoot: '/.netlify/functions/topAlbums',
  client: Axios,
  parseList: (response) => ({
    data: response.data.topAlbums,
  }),
  // only: ['FETCH_LIST'],
});
