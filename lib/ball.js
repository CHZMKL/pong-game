function Ball(x, y, height, width) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
}

Ball.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

module.exports = Ball;
