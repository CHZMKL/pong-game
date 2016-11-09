function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Paddle.prototype.moveUp = function() {
  if (this.y > 0) {
    this.y = this.y - 20;
  }
};
Paddle.prototype.moveDown = function() {
  if (this.y < 300) {
    this.y = this.y + 20;
  }
};

module.exports = Paddle;
