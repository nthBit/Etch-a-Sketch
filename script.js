const body = document.querySelector('body');
const divContainer = document.createElement('div');
divContainer.id = 'divContainer';

function createGridSquares(num) {
    for (i = 0; i < num; i++) {
        const div = document.createElement('div');
        divContainer.appendChild(div);
        body.appendChild(divContainer);
    }
}

createGridSquares(256);