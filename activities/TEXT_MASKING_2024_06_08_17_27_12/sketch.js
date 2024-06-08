let img, mask;

function preload() {
  img = loadImage("1.png");
  mask = loadImage("2.png");
}

function setup() {
  createCanvas(500, 500);
  img.resize(500, 500);
  noLoop();
}

function draw() {
  background("#FFFFF");
  img.mask(mask);
  image(img, 0, 0);
}
