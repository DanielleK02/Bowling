function Ball() {
  this.x = width / 2;
  this.y = height-60;
  this.vx = 0;
  this.xy = 2;
  this.SPEED = 1.5;
  this.active = true
  this.r = 60
  
  this.show = function() {
    fill(5);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 60,60);
  }
  
this.hits = function(fr) {
    var d = dist(this.x, this.y, fr.x, fr.y);
    if (d < this.r + fr.r) {
      return true;      
    } else {
      return false;
    }
    
}
  
  this.move = function(dx, dy) {

    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }
  
  this.update = function() {

    this.x += this.vx
    this.y += this.vy
  }
   stop(); {
     this.vx = 0
     this.vy = 0
   }
  
 
}
