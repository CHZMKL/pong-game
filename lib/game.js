var $ = require('jquery');

function Field(ball, paddleLeft, paddleRight) {
  this.x = 0;
  this.y = 0;
  this.width = 600;
  this.height = 400;
  this.paddleRight = paddleRight;
  this.paddleLeft = paddleLeft;
  this.ball = ball;
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
Field.prototype.BallFloorAndCeiling = function() {
  if (this.ball.y <= 0) {
    this.ball.directionY = -this.ball.directionY;
  }
  if ((this.ball.y + this.ball.height) >= this.height) {
    this.ball.directionY = -this.ball.directionY;
  }
};
//Field tells the paddle whether the ball has come in contact with it, and which direciton to send it back in
Field.prototype.BallCollideWithRightPaddle = function() {
  if (this.ball.x + this.ball.width > this.paddleRight.x && this.ball.y + this.ball.height > this.paddleRight.y && this.ball.y < this.paddleRight.y + this.paddleRight.height) {
    this.ball.directionX = -this.ball.directionX;
  }
};
//Field tells the paddle whether the ball has come in contact with it, and which direciton to send it back in
Field.prototype.BallCollideWithLeftPaddle = function() {
  if (this.ball.x < this.paddleLeft.x + this.paddleLeft.width && this.ball.y + this.ball.height > this.paddleLeft.y && this.ball.y < this.paddleLeft.y + this.paddleLeft.height) {
    this.ball.directionX = -this.ball.directionX;
  }
};
//Initial movement of the ball on game start
Field.prototype.ballStart = function() {
  this.ball.x += this.ball.directionX;
  this.ball.y += this.ball.directionY;
};
//Ends the volley of the ball upon it's exit from the screen
Field.prototype.endVolley = function() {
  //Left Player Scores
  if (this.ball.x > this.x + this.width + 40) {
    // this.gameState = false;
    this.leftScore+= 1;
    $('#leftScore').text(this.leftScore);
    this.ball.x = 300;
    this.ball.y = 200;
  }
  //Right Player Scores
  if (this.ball.x + this.ball.width < this.x - 40) {
    // this.gameState = false;
    this.rightScore+= 1;
    $('#rightScore').text(this.rightScore);
    this.ball.x = 300;
    this.ball.y = 200;
  }
};
//All Field Functions Combined
Field.prototype.run = function() {
  this.ballStart();
  this.BallFloorAndCeiling();
  this.BallCollideWithRightPaddle();
  this.BallCollideWithLeftPaddle();
  this.endVolley();
};
//Game Start
Field.prototype.start = function() {
  this.ballStart();
};

module.exports = Field;
