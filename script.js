const gridSide = 500;
let rows = 16;
let cols = rows;
let gridSize = rows * cols;

let sizeInput = document.querySelector(".select-size");
sizeInput.addEventListener("input", function () {
  rows = parseInt(sizeInput.value);
  cols = rows;
  console.log(`Nuevo tamaño de grid: ${rows}x${cols}`);
});

const gridContainer = document.querySelector(".grid-container");
gridContainer.style.width = `${gridSide}px`;
gridContainer.style.height = `${gridSide}px`;

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");

    square.className = "square";
    square.style.width = `${gridSide / cols}px`;
    square.style.height = `${gridSide / rows}px`;
    gridContainer.appendChild(square);
  }
}

createGrid();
