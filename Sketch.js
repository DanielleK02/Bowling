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
  brs[i] = new Br(i*35+135, 30);
}
  for (var j = 0; j < 3; j++) {
    mrs[j] = new Mr(j*35+155, 75);
  }
   
  for (var h = 0; h < 2; h++) {
    srs[h] = new Sr(h*35+175, 115);
  }
  
  for (var l = 0; l < 1; l++) {
   frs[l] = new Fr(l*35+195, 155); 
  }
}
 
function draw() {
  background(50, 0, 10);
  ball.show();
  ball.update();

    
 
   
  for (var i = 0; i < brs.length; i++) {
    if (brs[i].active) {
        brs[i].show();
      
        if (ball.hits(brs[i])) {
          brs[i].die();
            score++
        }
          
   } 
  }
  
  for (var j = 0; j < mrs.length; j++) {
    if(mrs[j].active) {
       mrs[j].show();
    
      if (ball.hits(mrs[j])) { 
        mrs[j].die();
          score++
      }
  }
  }
  
  for (var h = 0; h < srs.length; h++) {
   if (srs[h].active) {
     srs[h].show(); 
   
    if (ball.hits(srs[h])) {
      srs[h].die();
         score++
    }
  }
  }
  
  for (var l = 0; l < frs.length; l++) {
  if (frs[l].active) {
     frs[l].show();
     
    if (ball.hits(frs[l])) {
      frs[l].die();
         score++
    }
   
  }
  }
  if (ball.throws == -1) {
   if (score <= 10) {
     fill(200, 200, 50)
     textSize(40)
     text("Spare", 130, 200)
     }
  }
    if (ball.throws <= 1) {
        if (score == 10) {
     fill(200, 200, 50)
     textSize(40)
     text("Strike!!!", 130, 200)
     } 
        }
 

  
  
  fill(255)
  textSize(20)
  text("Score: " + score, 20, 380 )
}


function keyPressed() {
  if (key === ' ') {
   ball.move(0, -1);
    ball.throws--
  }
  
  
  if (keyCode === RIGHT_ARROW) {
 ball.move(1, 0); 
  } else if (keyCode === LEFT_ARROW) {
    ball.move(-1, 0);
  }
  
  
}
function keyReleased() {
   //ball.stop(); 
    
  }
