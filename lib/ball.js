function Ball(options) {
  options = options || {};
  this.x = options.x || 300;
  this.y = options.y || 200;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.speed = options.speed || 2;
  this.directionX = this.speed;
  this.directionY = -this.speed;
  this.gameState = 0;
}

Ball.prototype.moveUp = function() {
this.y = this.y + this.directionY;
};

Ball.prototype.moveDown = function() {
  this.y = this.y - this.directionY;
};

Ball.prototype.moveLeft = function() {
  this.x = this.x - this.directionX;
};

Ball.prototype.moveRight = function() {
  this.x = this.x + this.directionX;
};

module.exports = Ball;


// Ball.prototype.isOnCeiling = function() {
//   console.log('Hit the top!');
//   return (this.y < 0);
// };
//
// Ball.prototype.bounceOffCieling = function() {
//   if (this.isOnCeiling()) {
//     this.directionY = -this.directionY;
//     // this.directionX = -this.directionX;
//   }
// };
//
// Ball.prototype.isOnFloor = function() {
//   return (this.y + this.height > 400);
// };
//
// Ball.prototype.bounceOffFloor = function() {
//   if (this.isOnFloor()) {
//     this.directionY = -this.directionY;
//     // this.directionX = -this.directionX;
//   }
// };

// Ball.prototype.bounceOffRightPaddle = function(paddleRight) {
//   if (this.x + this.width > paddleRight.x && this.y - this.height > paddleRight.y && this.y < paddleRight.y + paddleRight.height) {
//     this.directionX = -this.directionX;
//   }
// };
//
// Ball.prototype.bounceOffLeftPaddle = function(paddleLeft) {
//   if (this.x < paddleLeft.x + paddleLeft.width && this.y - this.height > paddleLeft.y && this.y < paddleLeft.y + paddleLeft.height) {
//     this.directionX = -this.directionX;
//   }
// };

// Ball.prototype.endVolley = function() {
//   if (this.x > 600) {
//     this.gameState = 1;
//   }
//   if (this.x + this.width < 0) {
//     this.gameState = 1;
//   }
// };
