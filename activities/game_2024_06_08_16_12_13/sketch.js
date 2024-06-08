// this is responsible for the speed and location of the ball
var xCircle = 60;
var yCircle = Math.floor(Math.random() * 300) + 50;
var xSpeed = (-2, -2);
var ySpeed = (2, 6);
var score = 0;

// these are the dimensions of the rectangular platform
var rectangular_platform_lmaoWidth = 120;
var rectangular_platform_lmaoHeight = 12;

// this is the position of the platforms
var rectangular_platform_lmao1X = (400 - rectangular_platform_lmaoWidth) / 2;
var rectangular_platform_lmao2X = (400 - rectangular_platform_lmaoWidth) / 2;

let mode = "title";

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

//this is the whole game/page
function draw() {
  if (mode == "title") {
    titleScreen();
  } else if (mode == "end") {
    endScreen();
  } else if (mode == "gameplay") {
    background(0);

    // these are the data for the platforms
    fill("#ffffff");
    rect(
      rectangular_platform_lmao1X,
      390 - rectangular_platform_lmaoHeight,
      rectangular_platform_lmaoWidth,
      rectangular_platform_lmaoHeight
    ); // bottom platform
    rect(
      rectangular_platform_lmao2X,
      10,
      rectangular_platform_lmaoWidth,
      rectangular_platform_lmaoHeight
    ); // top

    move();
    display();
    bounce();
    rectangular_platform_lmao();

    //Scoreboard text
    fill("#ffffff");
    textSize(24);
    text("Points: " + score, 10, height / 2, width - 25);

    // this checks if the score has reached 10 points
    if (score >= 10) {
      mode = "end";
    }

    // Keybinds for moving platforms and stops it if it reaches the boundary
    if (keyIsDown(LEFT_ARROW)) {
      if (rectangular_platform_lmao1X > 0) {
        rectangular_platform_lmao1X -= 5;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (rectangular_platform_lmao1X < 400 - rectangular_platform_lmaoWidth) {
        rectangular_platform_lmao1X += 5;
      }
    }
    if (keyIsDown(65)) {
      // letter a
      if (rectangular_platform_lmao2X > 0) {
        rectangular_platform_lmao2X -= 5;
      }
    }
    if (keyIsDown(68)) {
      // d
      if (rectangular_platform_lmao2X < 400 - rectangular_platform_lmaoWidth) {
        rectangular_platform_lmao2X += 5;
      }
    }
  }
}

// this is the ball movement functions
function move() {
  xCircle += xSpeed;
  yCircle += ySpeed;
}

function bounce() {
  if (xCircle < 10 || xCircle > 400 - 10) {
    xSpeed *= -1;
  }
  if (yCircle < 10 || yCircle > 400 - 10) {
    ySpeed *= -1;
  }
}

function display() {
  fill("#ffffff");
  ellipse(xCircle, yCircle, 20, 20);
}

// this is the part that is responsible for the collision of the ball with the platforms aka "box colision algorythim"
function rectangular_platform_lmao() {
  if (
    xCircle > rectangular_platform_lmao1X &&
    xCircle < rectangular_platform_lmao1X + rectangular_platform_lmaoWidth &&
    yCircle >= 375
  ) {
    xSpeed *= 1;
    ySpeed *= -1;
    score++;
  }
  if (
    xCircle > rectangular_platform_lmao2X &&
    xCircle < rectangular_platform_lmao2X + rectangular_platform_lmaoWidth &&
    yCircle <= 25
  ) {
    xSpeed *= 1;
    ySpeed *= -1;
    score++;
  }
}

//title screen
function titleScreen() {
  background(0);
  textSize(60);
  fill(255);
  text("PONG", width / 2, height / 2 - 50);
  textSize(25);
  fill(255);
  text("ENTER TO START", width / 2, height / 2);
  fill(255);
  textSize(15);
  text("get 10 points to win", width / 2, height / 2 + 50);
  if (keyCode === ENTER) {
    mode = "gameplay";
  }
}

//end screen
function endScreen() {
  background(0);
  textSize(60);
  fill(255);
  text("You Win", width / 2, height / 2 - 50);
  textSize(25);
  fill(255);
  text("ESC to title", width / 2, height / 2);
  fill(250);
  text("You obtained 10 points", width / 2, height / 2 + 50);
  if (keyCode === ESCAPE) {
    mode = "title";
    score = 0;
    xCircle = 60;
    yCircle = Math.floor(Math.random() * 300) + 50;
  }
}
