const body = document.querySelector('body');
const divContainer = document.createElement('div');
divContainer.id = 'divContainer';

function createDynamicGrid(num) {
    for (let i = 0; i < (num ** 2); i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            // darken the colour by 10% each square
            let red = Math.floor((Math.random() * 255)) + 1;
            let green = Math.floor((Math.random() * 255)) + 1;
            let blue = Math.floor((Math.random() * 255)) + 1;
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
        div.style.width = `${800 / num}px`;
        div.style.height = `${800 / num}px`;
        divContainer.appendChild(div);
    }
    body.appendChild(divContainer);
}

const btn = document.createElement('button');
btn.textContent = 'Reset Grid';
body.appendChild(btn);

btn.addEventListener('click', () => {
    let gridRows;
    while (true) {
        gridRows = Number(prompt('Choose: 1 ≤ num ≤ 100.'));
        if (1 <= gridRows && gridRows <= 100) {
            break;
        }
    }
    divContainer.replaceChildren();
    createDynamicGrid(gridRows);
});
