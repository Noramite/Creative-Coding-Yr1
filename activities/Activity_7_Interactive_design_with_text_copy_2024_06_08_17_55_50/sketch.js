//creating an Interactive art with text
var start = 0 //start of noise
var bsu = "BATHSPA UNIVERSITY" //text to be displayed
var bfont // var for storing font
var speed = 0 //for the mouse movement later
var easing = 0.100 //smoothness of the mouse movement

function setup() {
  createCanvas (windowWidth, windowHeight) //canvas
  angleMode (DEGREES) //this is for the background art
  noiseDetail (2, 1) //noise detail for control

  bfont = loadFont("ShadowsIntoLight.ttf") //the font for the text
}

function draw() {
  background (30) //black bg
  noStroke () //self explanatory
  translate (width/2, height/2) //position of design
  
  //the background art
  var space = 0.3 //spacing of the shapes
  for (var i = 0; i < 360; i += space) { //make it round like a circle
    
    var aoff = map(cos(i), -3, 5, 0, 1) //for the adjustment of offsets 
    var boff = map(cos(i), 0, 1, 1, 4) 
    
    var pn = noise(aoff + start,  boff + start) //calculates the noise based of the offset and start
    var h = map(pn, 0, 1, -190, 200) //the height of the points
    
    //colors 
    var rc = map(sin(i), -1, 1, 100, 200) //red color
    var gc = map(h, -150, 150, 0, 150) //green color
    var bc = map(pn, 0, 1, 150, 255) //blue color
    
    rotate (space) //rotates the circles to make it look like its moving
    fill (rc, gc, bc) //fill using the colors
    ellipse (200, 0, h, 10) //the shapes
  }
  
  //text interaction and extra
  var target = dist(mouseX, mouseY) //mouse trail
  speed += (target - speed) * easing; //calculates it based off speed and makes it smooth
  
  if (mouseIsPressed) { //if you press your mouse
    textFont (bfont, 100) //font size
    translate (10, 10) //positioning 
    textAlign (CENTER) //centering text
    fill ("#03045e") //text color
    stroke ("white") //stroke so its visible against the bg
    strokeWeight (2) //strokes thickness
    text (bsu, 0, 0) //the text 
  }
  else { //mouse trail the rat follows you unless you click mouse
    translate (-910, -380) //mouse trail that follows you like a rat
    stroke ("white") //color
    strokeWeight(speed/5) //mouse movement
    line(mouseX, mouseY, pmouseX, pmouseY) //line for the mouse trail to appear
  }
  
  start += 0.04 /*animation for the design
  increasing it makes it go real fast the ooposie if you decrease it*/
}
//THE END FINALLY!!!!
//>:D