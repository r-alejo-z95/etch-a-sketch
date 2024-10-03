
function createGrid(gridSize) {
    
    gridContainer = document.querySelector(".grid-container")

    for (let i = 0 ; i < gridSize; i++) {
        const column = document.createElement('div');
        column.className = 'square';
        gridContainer.appendChild(column);

        for (let j = 1; j <= gridSize; j++) { 
            // j = 1; j <= gridSize
            const row = document.createElement('div');
            row.className = 'square';
            gridContainer.appendChild(column);
        }
    }

    


}

createGrid(16);
