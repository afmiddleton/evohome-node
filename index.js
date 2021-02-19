const axios = require('axios');
const { headers } = require('./header');

const tccHost = 'https://tccna.honeywell.com';
const tccPath = '/WebAPI/emea/api/v1';

const doIt = async () => {
  const resp = await axios.get(tccHost + tccPath, {
    headers,
  });
  return resp.status;
};

exports.doIt = doIt;
