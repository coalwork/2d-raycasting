class Boundary {
  constructor(p1x, p1y, p2x, p2y) {
    this.p1 = createVector(p1x, p1y);
    this.p2 = createVector(p2x, p2y);
  }
  display() {
    const {
      p1: { x: p1x, y: p1y },
      p2: { x: p2x, y: p2y }
    } = this;
    line(p1x, p1y, p2x, p2y);
  }
}
