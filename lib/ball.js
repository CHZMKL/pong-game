function Ball(options) {
  options = options || {};
  this.x = options.x || 300;
  this.y = options.y || 200;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.speed = options.speed || 4;
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
