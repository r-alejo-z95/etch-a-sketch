
function createGrid(gridSize) {
    
    gridContainer = document.querySelector(".grid-container")

    for (let i = 0 ; i < gridSize; i++) {
        let column = document.createElement('div');
        column.className = 'column';

        for (let j = 1; j <= gridSize; j++) { 
            let row = document.createElement('div');
            row.className = 'row';
            row.textContent = ('');
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

createGrid(16);
