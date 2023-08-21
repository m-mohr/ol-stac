import STAC from '../../../../../src/ol/layer/STAC.js';

describe('ol/layer/STAC', function () {
  describe('constructor (defaults)', function () {
    /** @type {STAC} */
    let group;

    beforeEach(function () {
      group = new STAC();
    });

    it('creates an instance', function () {
      expect(group).to.be.a(STAC);
    });
  });
});
