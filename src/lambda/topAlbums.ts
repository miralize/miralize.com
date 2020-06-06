import {
  APIGatewayEvent,
} from 'aws-lambda';
import { buildLastFmResponse, LastFmResponse } from './helpers/lastFmResponse';

const handler = async (event:APIGatewayEvent): Promise<LastFmResponse> => buildLastFmResponse({
  method: 'user.gettopalbums',
  event,
  parseResponse: (response) => ({
    data: {
      topAlbums: response.data.topalbums.album.map((album, index: number) => ({
        ...album,
        id: Date.now().toString() + index,
      })),
      meta: response.data.topalbums['@attr'],
    },
  }),
});

export { handler };
