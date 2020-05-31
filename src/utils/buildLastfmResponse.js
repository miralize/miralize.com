const axios = require('axios');
require('dotenv').config({ path: './.env.local' });

export default async ({
  method,
  event,
  parseResponse = (res) => (res),
}) => {
  try {
    const lastFMUrl = 'http://ws.audioscrobbler.com/2.0/';

    const lastFMApiKey = process.env.LASTFM_API_KEY;
    if (!lastFMApiKey) {
      throw new Error('There was an error building the request');
    }

    const params = {
      ...event.queryStringParameters,
      user: 'miralize',
      api_key: lastFMApiKey,
      format: 'json',
      method,
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('params:', params);
    }

    const response = await axios.get(lastFMUrl, { params });
    const transformedResponse = parseResponse(response);

    return {
      statusCode: response.status,
      body: JSON.stringify(transformedResponse.data),
    };
  } catch (err) {
    return {
      statusCode: err?.response?.status ?? 500,
      body: JSON.stringify(err?.response?.data ?? {}),
    };
  }
};
