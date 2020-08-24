class Ray {
  constructor(x, y, angle) {
    this.p1 = createVector(x, y);
    this.update(angle);
  }
  update(angle) {
    this.angle = angle;
  }
  display() {
    const { p1, angle } = this;
    const p2 = p5.Vector.fromAngle(angle, 50);

    push();
    translate(p1.x, p1.y);
    line(0, 0, p2.x, p2.y);
    pop();
  }
}
