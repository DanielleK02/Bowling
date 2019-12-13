 this.move = function(dx, dy) {

    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }

  this.update = function() {

    this.x += this.vx
    this.y += this.vy
    if (this.y < 0) {
      //pg.reset();
      this.x = width / 2
     if (this.throws > 0) {
      this.y = height - 60
         }
      this.vy = 0
    }
  }
  
  this.stop = function() {
    this.vx = 0
    this.vy = 0
  }


}
