const body = document.querySelector('body');
const divContainer = document.createElement('div');
divContainer.id = 'divContainer';

function createDynamicGrid(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
        divContainer.appendChild(div);
        body.appendChild(divContainer);
    }
}

createDynamicGrid(256);