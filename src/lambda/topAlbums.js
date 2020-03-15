import buildLastfmResponse from '../utils/buildLastfmResponse';

exports.handler = async (event) => buildLastfmResponse({
  method: 'user.gettopalbums',
  event,
  parseResponse: (response) => ({
    data: {
      topAlbums: response.data.topalbums.album.map((album, index) => ({
        ...album,
        id: Date.now().toString() + index,
      })),
      meta: response.data.topalbums['@attr'],
    },
  }),
});
