const axios = require('axios');
const { headers } = require('./request-headers');

const tccHost = 'https://tccna.honeywell.com';
const tccPath = '/WebAPI/emea/api/v1';

const init = async () => {
  const resp = await axios.get(tccHost + tccPath, {
    headers,
  });
  return resp.status;
};

exports.init = init;
