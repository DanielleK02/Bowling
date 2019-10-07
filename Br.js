function Br(x, y) {
  this.x = x;
  this.y = y;
  this.r = 20;
  
  
  this.show = function() {
    fill(255)
  ellipse(this.x, this.y, this.r*2, this.r*2)
}
  
}
