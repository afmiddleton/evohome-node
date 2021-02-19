const axios = require('axios');

const tccHost = 'https://tccna.honeywell.com';
const tccPath = '/WebAPI/emea/api/v1';

const doIt = async () => {
  const resp = await axios.get(tccHost + tccPath);
  return resp.status;
};

exports.doIt = doIt;
