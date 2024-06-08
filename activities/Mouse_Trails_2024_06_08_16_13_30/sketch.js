function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
}

// this part makes the shapes for the cursor
function drawShape(x, y, shape) {
  // makes random color pallets for purple
  let r = random(175, 225);
  let g = random(100, 150);
  let b = random(255, 255);

  fill(r, g, b);
  
  // this is the part is essentially just the size and location of the shapes
  if (shape === 'circle') {
    circle(x, y, 70);
  } else if (shape === 'square') {
    rect(x, y, 54, 30);
  } else if (shape === 'triangle') {
    triangle(x, y-50, x-50, y+50, x+50, y+50);
  }
}

// this part is the part that makes the shapes appear at the cursor
function mouseDragged() {
  let shapes = ['circle', 'square', 'triangle'];
  let shape = random(shapes);
  
  drawShape(mouseX, mouseY, shape);
}