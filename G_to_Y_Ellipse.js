var col = 0
var r = 0
function setup() {
  createCanvas(600, 400);
}

function draw() {
	col = map( mouseX, 0, 600, 0, 255);
  r = map( mouseX, 0, 400, 0, 255);
  background(col);
  fill( r, 240, 23);
  ellipse( mouseX, mouseY, 64, 64);
}
