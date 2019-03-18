require('dotenv').config();
const axios = require('axios');

const { LASTFM_API_KEY } = process.env;
const LASTFM_ENDPOINT = 'http://ws.audioscrobbler.com/2.0/';
const LASTFM_CONFIG = {
  params: {
    user: 'miralize',
    api_key: LASTFM_API_KEY,
    format: 'json',
  },
};

exports.handler = async (event, context, callback) => {
  let response;
  try {
    const res = await axios.get(LASTFM_ENDPOINT, {
      ...LASTFM_CONFIG,
      params: {
        ...LASTFM_CONFIG.params,
        ...event.queryStringParameters,
      },
    });

    response = {
      statusCode: 200,
      body: JSON.stringify(res.data),
    };
  } catch (e) {
    response = {
      statusCode: 500,
      body: 'Error processing your request',
    };
  }

  callback(null, response);
};
