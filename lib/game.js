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

//Switches Game State to 'true', can be used in conjunction with ball 'endVolley'.
Field.prototype.gameRunning = function() {
  this.gameState = true;
};
//Field tells ball whether it is coming in contact with the floor or ceiling and how to react
Field.prototype.BallFloorAndCeiling = function(ball) {
  if (ball.y <= 0) {
    this.ball.directionY = -this.ball.directionY;
  }
  if ((ball.y + ball.height) >= this.height) {
    this.ball.directionY = this.ball.directionY;
  }
};
//Field tells the paddle whether the ball has come in contact with it, and which direciton to send it back in
Field.prototype.BallCollideWithRightPaddle = function(paddleRight) {
  if (this.ball.x + this.ball.width > paddleRight.x && this.ball.y - this.ball.height > paddleRight.y && this.ball.y < paddleRight.y + paddleRight.height) {
    this.ball.directionX = -this.ball.directionX;
  }
};
//Field tells the paddle whether the ball has come in contact with it, and which direciton to send it back in
Field.prototype.BallCollideWithLeftPaddle = function(paddleLeft) {
  if (this.ball.x < paddleLeft.x + paddleLeft.width && this.ball.y - this.ball.height > paddleLeft.y && this.ball.y < paddleLeft.y + paddleLeft.height) {
    this.ball.directionX = this.ball.directionX;
  }
};
//Initial movement of the ball on game start
Field.prototype.ballStart = function() {
  this.ball.move();
  this.ball.moveRight();
};
//Ends the volley of the ball upon it's exit from the screen
Field.prototype.endVolley = function(ball) {
  if (ball.x > this.width) {
    this.gameState = false;
  }
  if (ball.x + ball.width < this.x) {
    this.gameState = false;
  }
};
//All Field Functions Combined
Field.prototype.start = function() {
  this.ballStart(this.ball);
  this.BallFloorAndCeiling(this.ball);
  this.BallCollideWithRightPaddle(this.paddle);
  this.BallCollideWithLeftPaddle(this.paddle);
  this.endVolley(this.ball);
};

module.exports = Field;


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
