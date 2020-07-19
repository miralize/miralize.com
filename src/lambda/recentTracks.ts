import { APIGatewayEvent } from 'aws-lambda';
import { AxiosResponse } from 'axios';
import { buildLastFmResponse, LastFmResponse } from './helpers/lastFmResponse';

const handler = async (event:APIGatewayEvent): Promise<LastFmResponse> => buildLastFmResponse({
  method: 'user.getrecenttracks',
  event,
  parseResponse: (response: AxiosResponse) => ({
    data: {
      recentTracks: response.data.recenttracks.track.map((track, index) => ({
        ...track,
        id: Date.now().toString() + index,
        artist: {
          ...track.artist,
          ...track.artist['#text'] && {
            name: track.artist['#text'],
          },
        },
      })),
      meta: response.data.recenttracks['@attr'],
    },
  }),
});

export { handler };
