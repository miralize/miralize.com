export const buildUrlRoot = ({
  method = new Error('missing param `method`'),
  user = 'miralize',
} = {}) => {
  const params = new URLSearchParams();
  params.append('method', method);
  params.append('user', user);

  return `/.netlify/functions/lastfm?${params.toString()}`;
};
