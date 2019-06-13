var r = 0
var b = 0
//r : 0,
//g : 33,
//b : 0,

function setup() {
    createCanvas(600, 400);
}

function draw() {
    r = map(mouseX, 0, 600, 130, 183);
    b = map(mouseY, 0, 400, 107, 41);
    background(r, 33, b );
    fill(300, 300, 300, 100);
    noStroke()
    ellipse(mouseX, mouseY, 40, 40);
}
