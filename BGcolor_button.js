var bgcolor;
var button1;
var button2;
var button3;
//var bgcolor;
/*var slider;
var nameInput;
var nameP;*/

function setup() {
    var cnv = createCanvas(600, 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

    bgcolor = color(200);
    greeting = createElement('h2', 'Which color do you like best?');
    greeting.position(x+150, y+60);

    textAlign(CENTER);
    textSize(50);

    // Create a button element
    button1 = createButton("Green");
    button1.position(x+278, y+110);
    // Attach a callback function called changeColor to the button's mousePressed event
    button1.mousePressed(changeColor);
    //Create new button element
    button2 = createButton("Blue");
    button2.position(x+278, y+140);
    //Attach another callback function called changeColor2 to the button's mousePressed event
    button2.mousePressed(changeColor2);
    //Create new button element
    button3 = createButton("Red");
    button3.position(x+278, y+170);
    button3.mousePressed(changeColor3);
}

// Callback function for the button's mousePressed event
function changeColor() {
    bgcolor = color(39, 153, 10);//random(150, 255), random(150, 255), random(150, 255));
}

//Callback function for the button's mousePressed event
function changeColor2() {
    bgcolor = color(39, 86, 163);
}

function changeColor3() {
    bgcolor = color(204, 10, 10);
}


function draw() {
    background(bgcolor);
    //background(bgcolor);
}