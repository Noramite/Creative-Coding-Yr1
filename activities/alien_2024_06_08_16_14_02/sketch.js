function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(34, 139, 34);
  beginShape();
  vertex(200, 300);
  bezierVertex(125, 300, 125, 100, 200, 100);
  bezierVertex(275, 100, 275, 300, 200, 300);
  endShape(CLOSE);
  
  fill(255);
  ellipse(170, 180, 40, 40);
  ellipse(230, 180, 40, 40);
  
  fill(0);
  ellipse(170, 180, 20, 20);
  ellipse(230, 180, 20, 20);
  
  fill(255);
  arc(200, 220, 80, 40, 0, PI);
  
  line(200, 125, 180, 80);
  line(200, 125, 220, 80);
  ellipse(180, 80, 20, 20);
  ellipse(220, 80, 20, 20);
}
