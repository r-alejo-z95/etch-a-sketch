const gridSide = 500;
let rows = 5;
let cols = 5;
let gridSize = rows * cols;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = `${gridSide}px`;
gridContainer.style.height = `${gridSide}px`;

function createGrid() {

    for (let i = 0 ; i < gridSize; i++) {
        let square = document.createElement('div');

        square.className = 'square';
        square.style.width = `${(gridSide / cols)}px`;
        square.style.height = `${(gridSide / rows)}px`;
        gridContainer.appendChild(square);
    }
}

createGrid();

