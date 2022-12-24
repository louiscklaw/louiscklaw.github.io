const frame_rate = 1;
const unitLength = 140;
const img_length = 100;

let boxColor = 255;
let BOX_COLOR = [230, 230, 230];

let strokeColor = 50;
let STROKE_COLOR = [106, 137, 204];

let CLICK_COLOR = [255, 6, 6];
let clickColor = 0;

let columns; /* To be determined by window width */
let rows; /* To be determined by window height */

let o_currentBoard;
let o_nextBoard;

let color_white = 255;
let paused_game = false;

let color_dice;
let color_dice_darken;
let resize_update = true;

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

/**
 * Initialize/reset the board state
 */
function init() {
  frameRate(1); // Attempt to refresh at starting FPS

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
          // The modulo operator is crucial for wrapping on the edge
          // neighbors += currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
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
            let color_idx = getRandomInt(color_dice_length);
            o_nextBoard[x][y] = { alive: 1, color: color_dice[color_idx], color_idx };
          } else {
            // Stasis
            o_nextBoard[x][y] = o_currentBoard[x][y];
            o_nextBoard[x][y].color = color(64, 64, 64);
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

  // Setup logic here
  // boxColor = color(...BOX_COLOR);
  // strokeColor = color(...STROKE_COLOR);
  // clickColor = color(...CLICK_COLOR);

  frameRate(frame_rate);

  color_dice = [
    color(250, 211, 144),
    color(106, 137, 204),
    color(184, 233, 148),
    color(248, 194, 145),
    color(130, 204, 221),
  ];

  color_dice_length = color_dice.length;

  /* Set the canvas to be under the element #canvas*/

  // NOTES:
  // Let's look at some of the magic variables here. The magic variables include windowWidth, windowHeight, width and height. They are all provided by p5.js to make our life easier.
  // windowWidth and windowHeight are the width and height of the viewport.
  // width and height are the width and height of the canvas element.
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.querySelector("#canvas"));

  /*Calculate the number of columns and rows */

  // NOTES:
  // We are calling createCanvas() with windowWidth and windowHeight - 100 to make a canvas that is as wide as the screen but 100 px shorter than the height.
  // We then use .parent() to insert our canvas element to the element with id canvas.
  columns = floor(width / unitLength) + 1;
  rows = floor(height / unitLength) + 1;

  /*Making both currentBoard and nextBoard 2-dimensional matrix that has (columns * rows) boxes. */

  o_currentBoard = [];
  o_nextBoard = [];

  for (let i = 0; i < columns; i++) {

    o_currentBoard[i] = [];
    o_nextBoard[i] = [];
  }
  // Now both currentBoard and nextBoard are array of array of undefined values.
  init(); // Set the initial values of the currentBoard and nextBoard
}

let skip = 0;

function draw() {
  // draw logic here
  // background(255);

  if (paused_game) {
    //
  } else {
    generate();
  }
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

  o_currentBoard[x][y] = { alive: 1, color: boxColor };

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
  if (resize_update) {
    resizeCanvas(window.innerWidth, window.innerHeight);
    setup();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#frame-rate-value").innerHTML = 10;
  document.querySelector("#frame-rate-range").value = 10;

  document.querySelector("#reset-game").addEventListener("click", function () {
    init(10);
    document.querySelector("#frame-rate-value").innerHTML = 10;
  });

  document.querySelector("#pause-game").addEventListener("click", function () {
    paused_game = !paused_game;
    if (paused_game) {
      document.querySelector("#game_status").innerHTML = "paused";
    } else {
      document.querySelector("#game_status").innerHTML = "running";
    }
  });

  document.querySelector("#resize-button").addEventListener("click", function () {
    resize_update = !resize_update;
    if (resize_update) {
      document.querySelector("#resize-status").innerHTML = "resize enabled";
    } else {
      document.querySelector("#resize-status").innerHTML = "resize disabled";
    }
  });

  document.querySelector("#frame-rate-range").addEventListener("change", function () {
    let ele = document.querySelector("#frame-rate-range");
    let framerate_value = ele.value;
    document.querySelector("#frame-rate-value").innerHTML = framerate_value;

    init(parseInt(framerate_value));
  });
});
