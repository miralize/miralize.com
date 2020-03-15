import buildLastfmResponse from '../utils/buildLastfmResponse';

exports.handler = async (event) => buildLastfmResponse({
  method: 'user.getrecenttracks',
  event,
  parseResponse: (response) => ({
    data: {
      recentTracks: response.data.recenttracks.track.map((track, index) => ({
        ...track,
        id: Date.now().toString() + index,
      })),
      meta: response.data.recenttracks['@attr'],
    },
  }),
});
