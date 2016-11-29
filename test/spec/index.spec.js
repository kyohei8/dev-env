import jsdom from 'mocha-jsdom';
import { assert } from 'chai';

describe('App test', function () {
  describe('test1', function () {
    it('case1', function () {
      assert.equal('a', 'a');
    });
    it('case2', function () {
      assert.equal('a', 'b');
    });
  });
});
