const frame_rate = 1;
const unitLength = 140;
const img_length = 100;

let boxColor = 255;
let strokeColor = 50;
let clickColor = 0;

let columns; /* To be determined by window width */
let rows; /* To be determined by window height */

let o_currentBoard;
let o_nextBoard;

let img_dice;

function preload() {
  img_dice = [
    loadImage("images/appium.png"),
    loadImage("images/cypress.png"),
    loadImage("images/docker.png"),
    loadImage("images/github.png"),
    loadImage("images/jenkins.png"),
    loadImage("images/js.svg"),
    loadImage("images/jupyter.png"),
    loadImage("images/kicad.png"),
    loadImage("images/nestjs.png"),
    loadImage("images/nextjs.png"),
    loadImage("images/nodejs.png"),
    loadImage("images/preact.png"),
    loadImage("images/python.jpg"),
    loadImage("images/react.png"),
    loadImage("images/voron.png"),
    loadImage("images/vscode.png"),
    loadImage("images/vue.png"),
  ]
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function init() {
  frameRate(1);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      o_currentBoard[i][j] = { alive: getRandomInt(2) };
      o_nextBoard[i][j] = { alive: 0 };
    }
  }
}

function generate() {
  //Loop over every single box on the board
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      // Count all living members in the Moore neighborhood(8 boxes surrounding)
      let neighbors = 0;
      let o_neighbors = 0;

      for (let i of [-1, 0, 1]) {
        for (let j of [-1, 0, 1]) {
          if (i == 0 && j == 0) {
            // the cell itself is not its own neighbor
            continue;
          }

          o_neighbors += parseInt(o_currentBoard[(x + i + columns) % columns][(y + j + rows) % rows].alive);

          // Rules of Life
          if (o_currentBoard[x][y].alive == 1 && o_neighbors < 2) {
            // Die of Loneliness
            o_nextBoard[x][y] = { alive: 0 };
          } else if (o_currentBoard[x][y].alive == 1 && o_neighbors > 3) {
            // Die of Overpopulation
            o_nextBoard[x][y] = { alive: 0 };
          } else if (o_currentBoard[x][y].alive == 0 && o_neighbors == 3) {
            // New life due to Reproduction
            o_nextBoard[x][y] = { alive: 1 };
          } else {
            // Stasis
            o_nextBoard[x][y] = o_currentBoard[x][y];
          }
        }
      }
    }
  }

  // Swap the nextBoard to be the current Board
  [o_currentBoard, o_nextBoard] = [o_nextBoard, o_currentBoard];
}

function setup() {
  console.log("setup");
  frameRate(frame_rate);

  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.querySelector("#canvas"));

  columns = floor(width / unitLength) + 1;
  rows = floor(height / unitLength) + 1;

  o_currentBoard = [];
  o_nextBoard = [];

  for (let i = 0; i < columns; i++) {
    o_currentBoard[i] = [];
    o_nextBoard[i] = [];
  }

  init(); // Set the initial values of the currentBoard and nextBoard
}

let skip = 0;

function draw() {
  // draw logic here
  // background(255);

  generate();
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      fill(boxColor);
      if (o_currentBoard[i][j].alive == 1) {
        fill(boxColor);
        stroke(boxColor);
        rect(i * unitLength, j * unitLength, unitLength, unitLength);

        let img = img_dice[getRandomInt(img_dice.length)];
        image(img, i * unitLength, j * unitLength, img_length, img_length);
      } else {
        fill(boxColor);
        stroke(boxColor);
        rect(i * unitLength, j * unitLength, unitLength, unitLength);
      }
    }
  }
}

/**
 * When mouse is dragged
 */
function mouseDragged() {
  /**
   * If the mouse coordinate is outside the board
   */
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
    return;
  }
  const x = Math.floor(mouseX / unitLength);
  const y = Math.floor(mouseY / unitLength);

  o_currentBoard[x][y] = { alive: 1 };

  fill(clickColor);
  stroke(strokeColor);
  rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

/**
 * When mouse is pressed
 */
function mousePressed() {
  noLoop();
  mouseDragged();
}

/**
 * When mouse is released
 */
function mouseReleased() {
  loop();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  setup();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log('canvas init...')
});
