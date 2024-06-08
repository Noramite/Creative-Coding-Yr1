var img, x, y;

function preload() {
  img = loadImage('cat.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  image(img, 0, 0);
  var c = get(x, y);
  fill(c);
  colorcode(x, y, c);
}

//this code makes a squre + hex code text at the center of the cursor
function colorcode(x, y, color) {
  rectMode(CENTER);
  rect(x, y, 100, 100);
  var hexColor = '#' + rgb_Hex(color[0], color[1], color[2]); //this makes the text
  fill(255);
  text(hexColor, x - 20, y - 15);
}

//this essentially just fuses the rgb values into one text 
function rgb_Hex(r, g, b) {
  return componentToHex(r) + componentToHex(b) + componentToHex(b);
}

//this is what actually makes the rgb values to hex
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
