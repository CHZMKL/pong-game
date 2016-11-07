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
  this.gameState = false;
}

Field.prototype.gameRunning = function() {
  this.gameState = true;
};

Field.prototype.endVolley = function() {
  if (this.ball.x > this.width) {
    this.gameState = false;
  }
  if (this.ball.x + this.ball.width < this.x) {
    this.gameState = false;
  }
};

// var paddleLeft = new Paddle(0, 200, 20, 100);
// var paddleRight = new Paddle(580, 200, 20, 100);
// var pongBall = new Ball(paddleRight, paddleLeft);
//
// //Ball Hitting Field Cieling & Floor
// Field.prototype.ballHitsWalls = function(ball) {
//   if (ball.y < this.y) {
//     this.ball.directionY++;
//   }
//   if (ball.y + ball.height > this.height) {
//     this.ball.directionY--;
//   }
// };
//
// Field.prototype.ballBounceOffRightPaddle = function() {
//   if (pongBall.x + pongBall.width > paddleRight.x && pongBall.y - pongBall.height > paddleRight.y && pongBall.y < paddleRight.y + paddleRight.height) {
//     this.pongBall.directionX--;
//   }
// };
//
// Field.prototype.ballBounceOffLeftPaddle = function() {
//   if (pongBall.x + pongBall.width > paddleLeft.x && pongBall.y - pongBall.height > paddleLeft.y && pongBall.y < paddleLeft.y + paddleLeft.height) {
//     this.pongBall.directionX--;
//   }
// };
//
// // Field.prototype.endVolley = function(pongBall) {
// //   if (pongBall.x > this.width) {
// //     this.gameState = 1;
// //   }
// //   if (pongBall.x + pongBall.width < this.x) {
// //     this.gameState = 1;
// //   }
// // };

module.exports = Field;
