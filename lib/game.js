const Paddle  = require('./paddle.js');
const Ball  = require('./ball.js');

function Field() {
  this.x = 0;
  this.y = 0;
  this.width = 600;
  this.height = 400;
  this.paddle = new Paddle();
  this.ball = new Ball();
  this.leftScore = 0;
  this.rightScore = 0;
}

module.exports = Field;
