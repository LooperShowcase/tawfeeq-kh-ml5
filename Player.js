class Player {
  constructor() {
    this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.vel = 0;
    this.gravity = 2.2;
    this.imageVersion = true;
  }
  jump() {
    if (this.y === height - this.size) this.vel = -25;
    this.vel = -25;
  }
  move() {
    this.y += this.vel;
    this.vel += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  show() {
    stroke("white");
    if (this.imageVersion === true) {
      image(pimg1, this.x, this.y, this.size, this.size);
      this.imageVersion = false;
    } else {
      image(pimg2, this.x, this.y, this.size, this.size);
      this.imageVersion = true;
    }
  }
  collided(obsToCheck) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 5,
      this.size - 5,
      obsToCheck.x,
      obsToCheck.y,
      obsToCheck.size - 5,
      obsToCheck.size - 5
    );
    return isColliding;
  }
}
