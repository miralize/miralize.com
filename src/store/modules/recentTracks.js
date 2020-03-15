import createCrudModule from 'vuex-crud';
import { buildUrlRoot } from '@/utils/lastFmApiHelpers';
import Axios from 'axios';

export default createCrudModule({
  resource: 'recentTracks',
  urlRoot: buildUrlRoot({
    method: 'user.getrecenttracks',
  }),
  client: Axios,
  parseList: (response) => ({
    data: response.data.recenttracks.track.map((track, index) => ({
      ...track,
      id: Date.now().toString() + index,
    })),
  }),
  // only: ['FETCH_LIST'],
});
