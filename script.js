const gridSide = 500;
let rows = 5;
let cols = 5;
let gridSize = rows * cols;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = `${gridSide}px`;
gridContainer.style.height = `${gridSide}px`;

function createGrid() {

    for (let i = 0 ; i < gridSide; i++) {
        let square = document.createElement('div');

        square.className = 'square';
        square.style.width = `${(gridSide / cols) - 2}px`;
        square.style.height = `${(gridSide / rows) - 2}px`;
        gridContainer.appendChild(square);
    }
}

createGrid();

