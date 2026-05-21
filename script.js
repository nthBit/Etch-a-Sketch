const body = document.querySelector('body');
const divContainer = document.createElement('div');
divContainer.id = 'divContainer';

function createDynamicGrid(num) {
    for (let i = 0; i < (num ** 2); i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
        div.style.width = `${800 / num}px`;
        div.style.height = `${800 / num}px`;
        divContainer.appendChild(div);
        body.appendChild(divContainer);
    }
}

const btn = document.createElement('button');
btn.textContent = 'Reset Grid';
body.appendChild(btn);

btn.addEventListener('click', () => {
    while (true) {
        gridRows = prompt('Choose: 1 ≤ num ≤ 100.');
        if (1 <= gridRows && gridRows <= 100) {
            break;
        } else {
            continue;
        }
    }
    divContainer.replaceChildren();
    createDynamicGrid(gridRows);
});
