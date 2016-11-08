const Paddle  = require('./paddle.js');
const Ball  = require('./ball.js');
const Field = require('./game.js');
// var leftScore = $('#leftScore');
// var rightScore = $('#rightScore');
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
    ctx.rect(ball.x, ball.y, ball.width, ball.height);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    // ball.x += ball.directionX;
    // ball.y += ball.directionY;
}

function drawLeftPaddle() {
  ctx.beginPath();
  ctx.rect(paddleLeft.x, paddleLeft.y, paddleLeft.width, paddleLeft.height);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function drawRightPaddle() {
  ctx.beginPath();
  ctx.rect(paddleRight.x, paddleRight.y, paddleRight.width, paddleRight.height);
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
$(document).ready(function() {
  console.log('The Document is ready!');
});

//Start Game Button that puts all objects into view
$('#startGame').on('click', function() {
  makeGameObjects();
  // startGame(field);
});

//Game Run & Animation
$(document).on('keyup', function(event) {
  if (event.keyCode === 32) {
    if (field.gameState === false) {
      // field.gameRunning();
    }
    else if (field.gameState === true) {
      console.log('The Game Is Running');
    }}
   {
    requestAnimationFrame(function gameLoop() {
      console.log('Test');
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      if(field.gameState === true) {
        //restart game
      }
      makeGameObjects();
      startGame();
      requestAnimationFrame(gameLoop);
    });
  }
});
