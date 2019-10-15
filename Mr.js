function Mr(x, y) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.active = true
  
  this.show = function() {
    fill(255)
  ellipse(this.x, this.y, this.r*2, this.r*2)
}
  this.die = function() {
   this.active = false 
  }
  
}
