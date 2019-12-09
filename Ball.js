function Ball() {
  this.x = width / 2;
  this.y = height - 60;
  this.vx = 0;
  this.vy = 0;
  this.SPEED = 1.5;
  this.active = true;
  this.r = 40

  this.show = function() {
    fill(5);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 70, 70);
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
    if (this.y < 10) {
      //pg.reset();
      this.x = width / 2
      this.y = height - 60
      this.vy = 0
    }
  }
  
  this.stop = function() {
    this.vx = 0
    this.vy = 0
  }


}
