const Paddle  = require('./paddle.js');
const Ball  = require('./ball.js');
// var leftScore = $('#leftScore');
// var rightScore = $('#rightScore');
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var $ = require('jquery');

//The Pong Ball & Paddle Objects & Parameters
var paddleLeft = new Paddle(0, 200, 20, 100);
var paddleRight = new Paddle(580, 200, 20, 100);
var pongBall = new Ball(ctx, paddleRight, paddleLeft);

//Frame Animation & Functionality
function eachFrame(){
  paddleLeft.draw(ctx);
  paddleRight.draw(ctx);
  pongBall.draw(ctx);
  pongBall.bounceOffCeiling();
  pongBall.bounceOffFloor();
  pongBall.bounceOffRightPaddle();
  pongBall.bounceOffLeftPaddle();
  pongBall.endVolley();
}

//Control Scheme
//Right Paddle Controls
$(document).on('keydown', function(event) {
  if(event.keyCode === 38) {
    paddleRight.moveUp();
  } else if (event.keyCode === 40) { paddleRight.moveDown();
  }
});
//Left Paddle Controls
$(document).on('keydown', function(event) {
  if(event.keyCode === 87) {
    paddleLeft.moveUp();
  } else if (event.keyCode === 83) {
    paddleLeft.moveDown();
  }
});

//Game End & Score Tracking


//Game Run & Animation
$(document).on('keypress', function(event) {
  if (event.keyCode === 32) {
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if(pongBall.gameState === 0) { eachFrame(); }
      requestAnimationFrame(gameLoop);
    });
  }
});
