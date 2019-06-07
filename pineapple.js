let input, button, greeting;

function setup() {
  createCanvas(600, 400);
  
  var feet 
  var cm = feet * 30.48;
  
  input = createInput();
  input.position(200, 150);
  
  button = createButton('Convert');
  button.position(340, 150);
  button.mousePressed(feetToCm);
  
  
  greeting = createElement('h2', 'Feet to Cm Converter');
  greeting.position(160, 55);

  textAlign(CENTER);
  textSize(50);
}
  
function draw() {
  background(220);
}


function convrt() {
  const cm = input.value();
  greeting.html('Equals');
  input.value('');
}

  
  //var cm2 = inchesToCm(11);
  //print(cm2);


function feetToCm() {
  feet = input.value();
  greeting.html(feet +' feet equals ' + feet* 30.48 + ' cm ');
  input.value('');
}




//function inchesToCm() {
  //inches = input.value();
  //return cm2;
//}