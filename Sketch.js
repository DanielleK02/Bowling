//Br is back row
//Mr is middle row
//Sr is second row
//Fr is first row

var ball;
var brs = [];
var mrs = [];
var srs = [];
var frs = [];
var score = 0;

function setup() {
  createCanvas(400, 400);
    ball = new Ball()
    for (var i = 0; i < 4; i++) {
  brs[i] = new Br(i*50+115, 30);
}
   for (var i = 0; i < 3; i++) {
  mrs[i] = new Mr(i*50+140, 80);
  }
   for (var i = 0; i < 2; i++) {
  srs[i] = new Sr(i*50+165, 130);
  }
  for (var i = 0; i < 1; i++) {
  frs[i] = new Fr(i*50+190, 180);
  }
}

function draw() {
  background(50, 0, 10);
   ball.show();

  
  for (var i = 0; i < brs.length; i++) {
  brs[i].show();
  }
  for (var i = 0; i < mrs.length; i++) {
  mrs[i].show();
  }
  
  for (var i = 0; i < srs.length; i++) {
  srs[i].show();
  }
  
  for (var i = 0; i < frs.length; i++) {
  frs[i].show();
  }
}
function keyPressed() {
  if (key === ' ') {
   ball.push(ball); 
  }
  
  if (keyCode === RIGHT_ARROW) {
   ball.move(1); 
  } else if (keyCode === LEFT_ARROW) {
    ball.move(-1);
  }

}
