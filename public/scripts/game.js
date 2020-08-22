let boundary;
let ray;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);
  stroke(255);
  noFill();

  boundary = new Boundary(200, 200, 300, 300);
  ray = new Ray(width / 2, height / 2, 50, 100);
}

function draw() {
  const mouseVector = createVector(mouseX, mouseY);

  ray.update(ray.p1.angleBetween(mouseVector));

  background(0);

  ellipse(ray.p1.x, ray.p1.y, 8);

  boundary.display();
  ray.display();
}
