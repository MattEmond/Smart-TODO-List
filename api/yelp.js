'use strict';

const yelp = require('yelp-fusion');
require('dotenv').config()

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = process.env.DB_YELP_CLIENT_ID;
const clientSecret = process.env.DB_YELP_CLIENT_SECRET;

const searchRequest = {
  term:'Wilbur',
  location: 'toronto, on'
};

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
