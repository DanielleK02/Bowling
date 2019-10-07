function Ball() {
  this.x = width / 2;
  
  this.show = function() {
    fill(5);
    ellipseMode(CENTER);
    ellipse(this.x, height-60, 60, 60);
  }
   
  this.move = function(dir) {
   this.y = this.y-5; 
  }
 
}
