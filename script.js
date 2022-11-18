const gridContainer = document.getElementById('gridContainer');
let column = document.createElement('div');
let box = document.createElement('div');
const sizeBtn = document.getElementById('size');
const resetBtn = document.getElementById('reset');

//Default size of the grid
let gridNumber = 16;

/**
 * gridSize functions changes the grid size based on the users input from the prompt.
 * The users input is being stored in gridNumber. If the users input is an integer
 * between 0 and 100, then the children of gridContainer will be removed and 
 * the grid will be recreated with the new gridNumber. 
 * 
 */

//listens for when the button with the id of size is clicked
 sizeBtn.addEventListener('click', gridSize);

function gridSize(){
    gridNumber = prompt('Please enter a number from 0 to 100.');

    //Checks for valid input. Desired input is an integer between 0 and 100 inclusive
    if (gridNumber < 0 || gridNumber > 100){
        alert('Your number is not between 0 and 100.')
    } else if(gridNumber % 1 != 0){
        alert('Your number is not an integer.')
    } else if (gridNumber == null){
        alert('Please enter a Number')
    }else{
        //if number is valid, then clear the current grid layout
        while(gridContainer.hasChildNodes()){
            gridContainer.removeChild(gridContainer.firstChild);
        }
        //build a new grid with the new gridNumber
        createColumn();
    }
    
}

/**
 * createColumn and createBox functions are used to access the DOM to 
 * add div nodes resulting in a grid of empty div nodes being created.
 * CreateColumn creates a child div node inside of gridContainer with a column
 * flex-flow. That column div will then be the parent of a box div node.
 * When a new column is created, it will be fill with box div nodes according
 * to the loop. This will repeat until the column loop is completed.
 */
function createColumn(){
    //loop through to build node divs with column CSS class
    //call createBox
    
    for (let i = gridNumber; i>0; i--){
        column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);
        createBox();
    }
};

function createBox(){
    //loop through to build node divs with box CSS class    

        for (let i = gridNumber; i>0; i--){
        box = document.createElement('div');
        box.classList.add('box');
        box.textContent = '';
        column.appendChild(box);
        console.log(gridNumber);
        }
    
};


/**
 * Listen for when the mouse is hovering over a div in the container.
 * Target that event and add a class list of color to change the backgroud
 * color of the div.
 */
gridContainer.addEventListener('mouseover', function (e) {
    e.target.classList.add('color');
    
});

//listens for when the button with the id of reset is clicked
resetBtn.addEventListener('click', reset);

//finds any node with the .color class and then removes the class
function reset(){
    const elements = document.querySelectorAll('.color')

    elements.forEach((elements) => {
        elements.classList.remove('color');
    });
};

createColumn();






/*
//event listener to prompt loop that will create a row
//once the row is created, loop through to make the columns
*/

//BELOW: This creates squares in a grid where each box and each column need to be 
//declared manually
/*
let column = document.createElement('div');
column.classList.add('column');
container.appendChild(column);

let column2 = document.createElement('div');
column2.classList.add('column');
container.appendChild(column2);

let box = document.createElement('div');
box.classList.add('box');
box.textContent = 'test';
column.appendChild(box);

let testBox = document.createElement('div');
testBox.classList.add('box');
testBox.textContent = 'testBox';
column.appendChild(testBox);


let testBox2 = document.createElement('div');
testBox2.classList.add('box');
testBox2.textContent = 'testBox2';
column2.appendChild(testBox2);

let testBox3 = document.createElement('div');
testBox3.classList.add('box');
testBox3.textContent = 'testBox3';
column2.appendChild(testBox3);
*/