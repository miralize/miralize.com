import { APIGatewayEvent } from 'aws-lambda';

import axios, { AxiosResponse } from 'axios';

require('dotenv').config({ path: './.env.local' });

export interface LastFmResponse {
  statusCode: number
  body: string
}

export const buildLastFmResponse = async ({
  method,
  event,
  parseResponse = (res) => (res),
}: {
  method: string,
  event: APIGatewayEvent,
  parseResponse: (a: AxiosResponse) => any,
}): Promise<LastFmResponse> => {
  try {
    const lastFMUrl = 'http://ws.audioscrobbler.com/2.0/';

    const lastFMApiKey:string = process.env.LASTFM_API_KEY;
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

    const response:AxiosResponse = await axios.get(lastFMUrl, { params });
    const transformedResponse = parseResponse(response);

    return {
      statusCode: response.status,
      body: JSON.stringify(transformedResponse.data),
    };
  } catch (err) {
    console.log('err:', err);
    return {
      statusCode: err?.response?.status ?? 500,
      body: JSON.stringify(err?.response?.data ?? {}),
    };
  }
};
