let values = [80, 120, 130, 120, 140]; // these are the eq values
let names = ['400', '1k', '2.5k', '6.3k', '16k']; // frequencies in the eq

//this is literally just a title function
function title() {
  background(220);
  noStroke();
  textSize(25);
  text("Sony 5 band EQ", width/3-25, height/4+20);
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

//this draws the chart
function draw() {
  background(220);
  title();
  for(let i = 0; i < values.length; i++) {
    let x = map(i, 0, values.length, 50, width - 50);
    let y = height-45 - values[i];
    let w = (width - 90) / values.length - 11;
    let h = values[i];
    rect(x, y, w, h);
    text(names[i], x+4, height - 10);
  }
}
