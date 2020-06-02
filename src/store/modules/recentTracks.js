import { createCrudModule } from '@/utils/vuex-crud';

export default createCrudModule({
  resource: 'recentTracks',
  urlRoot: '/.netlify/functions/recentTracks',
  parseList: (response) => ({
    data: response.data.recentTracks,
  }),
  // only: ['FETCH_LIST'],
});
