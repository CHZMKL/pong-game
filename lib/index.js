const Paddle  = require('./paddle.js');
const Ball  = require('./ball.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var paddleLeft = new Paddle(0, 200, 20, 100);
var paddleRight = new Paddle(580, 200, 20, 100);

paddleLeft.draw(context);
paddleRight.draw(context);

var pongBall = new Ball(300, 200, 20, 20);

pongBall.draw(context);
