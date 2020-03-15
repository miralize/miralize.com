import buildLastfmResponse from './helpers/buildLastfmResponse';

exports.handler = async (event) => buildLastfmResponse({
  method: 'user.getrecenttracks',
  event,
});
