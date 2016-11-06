function Ball(options, rightP, leftP) {
  this.x = options.x || 300;
  this.y = options.y || 200;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.rightP = rightP;
  this.leftP = leftP;
  this.directionX = options.directionY || 2;
  this.directionY = options.directionX || -2;
  this.gameState = 0;
}

Ball.prototype.draw = function(ctx) {
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.x += this.directionX;
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

Ball.prototype.bounceOffCeiling = function() {
  if (this.y < 0) {
    this.directionY++;
  }
};

Ball.prototype.bounceOffFloor = function() {
  if (this.y + this.height > 400) {
    this.directionY--;
  }
};

Ball.prototype.bounceOffRightPaddle = function() {
  if (this.x + this.width > this.rightP.x && this.y - this.height > this.rightP.y && this.y < this.rightP.y + this.rightP.height) {
    this.directionX--;
  }
};

Ball.prototype.bounceOffLeftPaddle = function() {
  if (this.x < this.leftP.x + this.leftP.width && this.y - this.height > this.leftP.y && this.y < this.leftP.y + this.leftP.height) {
    this.directionX++;
  }
};

Ball.prototype.endVolley = function() {
  if (this.x > 600) {
    this.gameState = 1;
  }
  if (this.x + this.width < 0) {
    this.gameState = 1;
  }
};

module.exports = Ball;
