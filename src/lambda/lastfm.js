const axios = require('axios');
require('dotenv').config({ path: './.env.local' });


exports.handler = async (event) => {
  try {
    const lastFMUrl = 'http://ws.audioscrobbler.com/2.0/';
    const lastFMApiKey = process.env.LASTFM_API_KEY;
    if (!lastFMApiKey) {
      return {
        statusCode: 500,
        body: 'There was an error.',
      };
    }
    const defaultLastFmParams = {
      user: 'miralize',
      api_key: lastFMApiKey,
      format: 'json',
      method: 'user.gettopalbums',
      period: '7day',
    };

    const params = { ...defaultLastFmParams, ...event.queryStringParameters };
    if (process.env.NODE_ENV !== 'development') {
      console.log('params:', params);
    }
    const response = await axios.get(lastFMUrl, { params });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: err.response.status,
      body: JSON.stringify(err.response.data),
    };
  }
};
