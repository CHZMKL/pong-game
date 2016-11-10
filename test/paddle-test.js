const chai = require('chai');
const assert = chai.assert;
const Paddle = require('../lib/paddle.js');

describe('Paddle', function() {

    it('should be a function', function() {
      assert.isFunction(Paddle);
    });

    it('should create a Paddle', function() {
      var paddle = new Paddle();
      assert.isObject(paddle);
    });

    it('should be able to take an x value', function() {
      var paddle = new Paddle(200);
      assert.equal(paddle.x, 200);
    });

    it('should be able to have a y value', function() {
      var paddle = new Paddle(200,100);
      assert.equal(paddle.y, 100);
    });

    it('should be able to have a width value', function() {
      var paddle = new Paddle(200, 350, 20);
      assert.equal(paddle.width, 20);
    });

    it('should be able to have a height value', function() {
      var paddle = new Paddle(200, 100, 20, 100);
      assert.equal(paddle.height, 100);
    });

    it('should be able to move up', function() {
      var paddle = new Paddle(200, 120, 20, 100);
      assert.equal(paddle.y, 120);
      paddle.moveUp();
      assert.equal(paddle.y, 100);
    });

    it('should be able to move down', function() {
      var paddle = new Paddle(200, 100, 20, 100);
      assert.equal(paddle.y, 100);
      paddle.moveDown();
      assert.equal(paddle.y, 120);
    });
  });
