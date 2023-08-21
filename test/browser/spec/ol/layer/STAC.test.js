import STAC from '../../../../../src/ol/layer/STAC.js';

describe('ol/layer/STAC', function () {
  describe('constructor (defaults)', function () {
    /** @type {STAC} */
    let group;

    beforeEach(function () {
      group = new STAC({
        url: 'https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json',
      });
    });

    it('creates an instance', function () {
      expect(group).to.be.a(STAC);
    });
  });
});
