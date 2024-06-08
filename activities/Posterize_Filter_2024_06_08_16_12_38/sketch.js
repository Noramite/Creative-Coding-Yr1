var img;

function preload() {
  img = loadImage("sparkle.png");
}

//this formats the image and canvas to screen size
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

//function that activates + draws them
function draw() {
  background(0);
  show_image();
  addfilter();
  filter_display();
}

function show_image() {
  image(img, width / 2, height / 2, width, height);
}

//this adds the filter
function addfilter() {
  var v = map(mouseX, 0, width, 2, 20);
  filter(POSTERIZE, v);
}

//this is the same as the filter but for the text
function filter_display() {
  var percentage = map(mouseX, 0, width, 0, 100);
  text("filter amount: " + round(percentage) + "%", width / 3, height / 5);
}
