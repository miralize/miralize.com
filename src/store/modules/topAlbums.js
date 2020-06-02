import { createCrudModule } from '@/utils/vuex-crud';

export default createCrudModule({
  resource: 'topAlbums',
  urlRoot: '/.netlify/functions/topAlbums',
  parseList: (response) => ({
    data: response.data.topAlbums,
  }),
  // only: ['FETCH_LIST'],
});
