const gridSide = 70;
let rows = 16;
let cols = rows;
let gridSize = rows * cols;
let squares;

const gridContainer = document.querySelector(".grid-container");
gridContainer.style.height = `${gridSide}vh`;
gridContainer.style.width = gridContainer.style.height;

function createGrid() {
  gridContainer.textContent = "";

  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");

    square.className = "square";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    square.style.height = `${gridSide / rows}vh`;
    square.style.width = square.style.height;
    gridContainer.appendChild(square);
  }
  squares = document.querySelectorAll(".square");
}

const sizeInput = document.querySelector(".select-size");
sizeInput.addEventListener("change", () => {
  if (sizeInput.value < 16) {
    sizeInput.value = 16;
  } else if (sizeInput.value > 100) {
    sizeInput.value = 100;
  }
  rows = sizeInput.value;
  cols = rows;
  gridSize = rows * cols;
  createGrid();
});

function getRandomColor() {
  const colorsArray = [
    "rgba(255, 0, 0, 1)",
    "rgba(255, 154, 0, 1)",
    "rgba(208, 222, 33, 1)",
    "rgba(79, 220, 74, 1)",
    "rgba(63, 218, 216, 1)",
    "rgba(47, 201, 226, 1)",
    "rgba(28, 127, 238, 1)",
    "rgba(95, 21, 242, 1)",
    "rgba(186, 12, 248, 1)",
    "rgba(251, 7, 217, 1)",
    "rgba(255, 0, 0, 1)",
  ];
  let randomIndex = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomIndex];
}

let isGradient = false;

const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", () => {
  if (!isGradient) {
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
      });
    });
    rainbowBtn.style.background =
      "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)";
  } else {
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });
    rainbowBtn.style.background = "";
  }
  isGradient = !isGradient;
});

const resetBtn = document.querySelector(".reset-grid");
resetBtn.addEventListener("click", () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
});

createGrid();
