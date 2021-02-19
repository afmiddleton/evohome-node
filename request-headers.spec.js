const { expect } = require('chai');
const nock = require('nock');
const evoClient = require('./index.js');
const headersAccept = require('./request-headers').accept;

describe('Request headers', async () => {
  const tccHost = 'https://tccna.honeywell.com';
  const tccPath = '/WebAPI/emea/api/v1';

  beforeEach(() => {
    nock(tccHost)
      .get(tccPath)
      .matchHeader('accept', headersAccept)
      .reply(200, {});
    nock(tccHost).get(tccPath).reply(400, {});
  });

  afterEach(() => {
    nock.restore();
  });

  it('should request json or xml', async () => {
    expect(await evoClient.init()).to.be.equal(200);
  });
});
