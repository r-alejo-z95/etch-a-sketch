const gridSide = 70;
let rows = 16;
let cols = rows;
let gridSize = rows * cols;

const gridContainer = document.querySelector(".grid-container");
gridContainer.style.width = `${gridSide}vw`;
gridContainer.style.height = `${gridSide}vh`;

function createGrid() {
  gridContainer.textContent = "";

  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");

    square.className = "square";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    square.style.width = `${gridSide / cols}vw`;
    square.style.height = `${gridSide / rows}vh`;
    gridContainer.appendChild(square);
  }
}

let sizeInput = document.querySelector(".select-size");
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

let resetBtn = document.querySelector(".reset-grid");
resetBtn.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
});

createGrid();
