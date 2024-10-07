


function createGrid(gridSide) {
    
    grid = document.querySelector(".grid")

    for (let i = 0 ; i < (gridSide * gridSide); i++) {
        let square = document.createElement('div');

        square.className = 'square';
        square.style.width = `calc(100% / ${gridSide})`;
        square.style.height = `calc(100% / ${gridSide})`;
        grid.appendChild(square);
    }
}

createGrid(5);

