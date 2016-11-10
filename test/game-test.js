const chai = require('chai');
const assert = chai.assert;
const Field = require('../lib/game.js');

describe('Field', function() {

  it('should be a function', function() {
    assert.isFunction(Field);
  });
});
