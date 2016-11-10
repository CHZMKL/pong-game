const Paddle  = require('./paddle.js');
const Ball  = require('./ball.js');
const Field = require('./game.js');
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var $ = require('jquery');


//The Pong Ball & Paddle Objects & Parameters
var paddleLeft = new Paddle(0, 200, 20, 100);
var paddleRight = new Paddle(580, 200, 20, 100);
var ball = new Ball();
var field = new Field(ball, paddleLeft, paddleRight);

// All Game Objects Drawn
function drawField() {
  ctx.beginPath();
  ctx.rect(field.x, field.y, field.width, field.height);
  ctx.fillStyle = "#7FFF00";
  ctx.fill();
  ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.rect(field.ball.x, field.ball.y, field.ball.width, field.ball.height);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawLeftPaddle() {
  ctx.beginPath();
  ctx.rect(field.paddleLeft.x, field.paddleLeft.y, field.paddleLeft.width, field.paddleLeft.height);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function drawRightPaddle() {
  ctx.beginPath();
  ctx.rect(field.paddleRight.x, field.paddleRight.y, field.paddleRight.width, field.paddleRight.height);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}
//Draw Functions Combined into one function
function makeGameObjects() {
  drawField();
  drawLeftPaddle();
  drawRightPaddle();
  drawBall();
}
//Frame Animation & Functionality
function startGame() {
  field.start();
}

//Game End & Score Tracking
function restart() {
  field.endVolley();
}

function runGame() {
  field.run();
}
//Control Scheme
//Right Paddle Controls
$(document).on('keydown', function(event) {
  if(event.keyCode === 38) {
    field.paddleRight.moveUp();
  } else if (event.keyCode === 40) { field.paddleRight.moveDown();
  }
});
//Left Paddle Controls
$(document).on('keydown', function(event) {
  if(event.keyCode === 87) {
    field.paddleLeft.moveUp();
  } else if (event.keyCode === 83) {
    field.paddleLeft.moveDown();
  }
});

//Start Game Button that puts all objects into view
$('#startGame').on('click', function() {
  makeGameObjects();
});

//Game Run & Animation
$(document).on('keyup', function(event) {
  if (event.keyCode === 32 && field.gameState === false) {
    startGame(field);
    field.gameState = true;

      requestAnimationFrame(function gameLoop() {
        console.log('Test');
        makeGameObjects();
        runGame();
        requestAnimationFrame(gameLoop);
      });
  }
});
