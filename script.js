
function createGrid(gridSize) {
    
    grid = document.querySelector(".grid")

    for (let i = 0 ; i < gridSize; i++) {
        let column = document.createElement('div');
        column.textContent = '';
        column.className = 'column';

        for (let j = 1; j <= gridSize; j++) { 
            let row = document.createElement('div');
            row.className = 'row';
            row.textContent = ('');
            row.style.flexBasis = `calc(100% / ${gridSize})`;
            row.style.height = `calc(100% / ${gridSize})`;
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
}

createGrid(5);

