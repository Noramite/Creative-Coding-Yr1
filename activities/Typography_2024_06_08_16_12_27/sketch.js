// mapped letters to binary equivalent "pain"
var letters = {
  'B': [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0],
  'A': [0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  'T': [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  'H': [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  'S': [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  'P': [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  'A': [0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1]
};

var blockSize = 20;

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  background(255);
}

// this puts the word bathspa at the mouse position
function draw() {
  background(255);
  var word = "BATHSPA";
  for (var i = 0; i < word.length; i++) {
    drawLetter(letters[word[i]], mouseX - (word.length * blockSize * 3) + i * blockSize * 6, mouseY - blockSize * 2);
  }
}

// this maps letter to mouse location
function drawLetter(letter, x, y) {
  var xPos = x, yPos = y;
  for (var j = 0; j < letter.length; j++) {
    if (letter[j] == 1) {
      fill(map(xPos, 0, width, 0, 255), map(yPos, 0, height, 0, 255), 150);
      rect(xPos, yPos, blockSize, blockSize);
    }
    xPos += blockSize;
    if (j % 4 == 3) {
      xPos = x;
      yPos += blockSize;
    }
  }
}
