var ball;
var brs = [];
var mrs = [];
var srs = [];
var frs = [];
var score = 0;

function setup() {
  createCanvas(400, 400);
    ball = nevar ball;
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
  ball.update();
  
  
  for (var i = 0; i < brs.length; i++) {
    if (brs[i].active) {
        brs[i].show();
      }
        if (ball.hits(brs[i])) {
          brs[i].die();
          score += 1;

  }
   }
  
  for (var i = 0; i < mrs.length; i++) {
    if(mrs[i].active) {
       mrs[i].show();
    }
      if (ball.hits(mrs[i])) {
       mrs[i].die(); 
       score += 1;
      }
  }
  
  for (var i = 0; i < srs.length; i++) {
   if (srs[i].active) {
     srs[i].show(); 
   }
    if (ball.hits(srs[i])) {
      srs[i].die();
      score += 1;
    }
  }
  
  for (var i = 0; i < frs.length; i++) {
  if (frs[i].active) {
     frs[i].show();
     }
    if (ball.hits(frs[i])) {
     frs[i].die();
      score += 1;
   }
     
  }
  
  fill(255)
  textSize(20)
  text("Score: " + score, 20, 380 )

}



function keyPressed() {
  if (key === ' ') {
   ball.move(0, -1); 
  }
  
  if (keyCode === RIGHT_ARROW) {
 ball.move(1, 0); 
  } else if (keyCode === LEFT_ARROW) {
    ball.move(-1, 0);
  }
  
  function keyReleased() {
   ball.stop(); 
    
  }
} Ball()
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
  ball.update();
  
  
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
  if (frs[i].active) {
     frs[i].show();
     }
    if (ball.hits(frs[i])) {
     frs[i].die();
   }
    
  }
  
  fill(255)
  textSize(20)
  text("Score: " + score, 20, 380 )

}



function keyPressed() {
  if (key === ' ') {
   ball.move(0, -1); 
  }
  
  if (keyCode === RIGHT_ARROW) {
 ball.move(1, 0); 
  } else if (keyCode === LEFT_ARROW) {
    ball.move(-1, 0);
  }
  
  function keyReleased() {
   ball.stop(); 
    
  }
}
