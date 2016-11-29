import jsdom from 'mocha-jsdom';
// import API from '../../app/scripts/api';
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
