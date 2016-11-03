const Paddle  = require('./paddle.js');
const Ball  = require('./ball.js');
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var $ = require('jquery');

//The Pong Paddle Objects & Functionality
var paddleLeft = new Paddle(0, 200, 20, 100);
var paddleRight = new Paddle(580, 200, 20, 100);

function eachFrame(){
  paddleLeft.draw(ctx);
  paddleRight.draw(ctx);
  pongBall.draw(ctx);
}

$(document).on('keydown', function(event) {
  if(event.keyCode === 38) {paddleLeft.moveUp() ;paddleRight.moveUp();}
  else if (event.keyCode === 40) {paddleLeft.moveDown(); paddleRight.moveDown();}
});

//The Pong Ball Object & Functionality
var pongBall = new Ball(ctx);

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eachFrame();
  requestAnimationFrame(gameLoop);
});
