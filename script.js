/*// Creating the parent div
const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
*/
//creating a button to change grid size
const btn1 = document.createElement('button');
btn1.className = 'user';
btn1.textContent= '30 * 30';
document.body.insertBefore(btn1, document.body.firstElementChild);

// creating a color button- when clicked divs should change multiple colors
const btn2 = document.createElement('button');
btn2.className = 'color';
btn2.textContent = 'rainbow';
document.body.insertBefore(btn2, btn1);

// Creating the box grid
let numPerRow;
function createBox(numPerRow) {
    const total = (numPerRow * numPerRow) + numPerRow;
    const off = numPerRow + 1;

    for (let i = 1; i < total; i++) {
        const div = document.createElement('div');
        div.className = 'child';

        if (i % off === 0) {
            div.style.cssText = 'border: 0; height: 0; width: 100%';
        } 
        container.appendChild(div);
    }
}

// create a prompt to ask the player to enter a value
/*
let ask = +prompt(`Enter ${numPerRow}`);

btn1.addEventListener('click', function() {
    ask;
    createBox();
})
*/

console.log(createBox(20));

//function to change color
function changeColor(e) {
    e.target.style.background = 'lime';
}

function colorStay(e) {
    e.target.style.background = 'pink';
}


const move = document.querySelectorAll('.child');

//looping through the nodeDiv with event listener
move.forEach((item) => {
    item.addEventListener('mousemove', changeColor);
    item.addEventListener('mouseout', colorStay);
});
