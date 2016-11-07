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
  this.level = [];
  this.gameState = 0;
}

var paddleLeft = new Paddle(0, 200, 20, 100);
var paddleRight = new Paddle(580, 200, 20, 100);
// var pongBall = new Ball(paddleRight, paddleLeft);

//Ball Hitting Field Cieling & Floor
Field.prototype.ballHitsWalls = function() {
  if (this.ball.y < this.y) {
    this.ball.directionY++;
  }
  if (this.ball.y + this.ball.height > this.height) {
    this.ball.directionY--;
  }
};

Field.prototype.ballBounceOffRightPaddle = function() {
  if (this.ball.x + this.ball.width > paddleRight.x && this.ball.y - this.ball.height > paddleRight.y && this.ball.y < paddleRight.y + paddleRight.height) {
    this.ball.directionX--;
  }
};

Field.prototype.ballBounceOffLeftPaddle = function() {
  if (this.ball.x + this.ball.width > paddleLeft.x && this.ball.y - this.ball.height > paddleLeft.y && this.ball.y < paddleLeft.y + paddleLeft.height) {
    this.ball.directionX--;
  }
};

Field.prototype.endVolley = function() {
  if (this.ball.x > this.width) {
    this.gameState = 1;
  }
  if (this.ball.x + this.ball.width < this.x) {
    this.gameState = 1;
  }
};

module.exports = Field;
