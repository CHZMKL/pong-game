function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Paddle.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};
Paddle.prototype.moveUp = function() {
  if (this.y > 0) {
    this.y-=20;
  }
};
Paddle.prototype.moveDown = function() {
  if (this.y < 300) {
    this.y+=20;
  }
};


module.exports = Paddle;
