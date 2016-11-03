function Ball(options) {
  this.x = options.x || 300;
  this.y = options.y || 200;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.directionX = options.directionY || 2;
  this.directionY = options.directionX || -2;
}

Ball.prototype.draw = function(ctx) {
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.x += this.directionY;
  this.y += this.directionY;
  return this;
};

Ball.prototype.moveUp = function() {
  this.y--;
};

Ball.prototype.moveDown = function() {
  this.y++;
};

Ball.prototype.moveLeft = function() {
  this.x--;
};

Ball.prototype.moveRight = function() {
  this.x++;
};

module.exports = Ball;
