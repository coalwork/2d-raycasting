class Ray {
  constructor(p1x, p1y, p2x, p2y) {
    this.p1 = createVector(p1x, p1y);
    this.p2 = createVector(p2x, p2y);
  }
  update(angle) {
    this.p2 = p5.Vector.fromAngle(angle, 50);
  }
  display() {
    const { p1, p2 } = this;
    push();
    translate(p1.x, p1.y);
    line(0, 0, p2.x, p2.y);
    pop();
  }
}
