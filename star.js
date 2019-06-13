function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 70, 3);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  fill(204, 51, 153);
  star(0, 0, 70, 150, 10);
  pop();
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -25.0);
  fill(153, 102, 255);
  star(0, 0, 103, 30, 40);
  pop();
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 100.0);
  fill(255, 214, 153);
  star(0, 0, 20, 30, 5);
  pop();
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 100.0);
  fill(128, 64, 0);
  star(0, 0, 10, 20, 5);
  pop();
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -40.0);
  star(0, 0, 5, 50, 3);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 50, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
