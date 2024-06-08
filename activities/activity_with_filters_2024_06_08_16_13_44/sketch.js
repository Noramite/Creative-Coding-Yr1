let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage("amogus.png");
}

function setup() {
  createCanvas(220, 229);
  smallPoint = 10;
  largePoint = 15;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

//this function draws the whole dots thingy at the image itself
function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  let invertedColor = [];
  for (let i = 0; i < 3; i++) {
    invertedColor[i] = 255 - pix[i];
  }
  // this part inverts colors for fun
  fill(invertedColor[0], invertedColor[1], invertedColor[2], 9999);
  ellipse(x, y, pointillize, pointillize);
}
