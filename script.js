const gridContainer = document.getElementById('gridContainer');

let column = document.createElement('div');
let box = document.createElement('div');

//NOT YET IN USE: when the user clicks, a grid is created
//Create a variable to be used when identifying if the user clicks anywhere on the page
const canvas = document.querySelector('body'); 
//canvas.addEventListener('click', createColumn());


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
    
    for (let i = 16; i>0; i--){
        column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);
        createBox();
    }
};

function createBox(){
    //loop through to build node divs with box CSS class    

        for (let i = 16; i>0; i--){
        box = document.createElement('div');
        box.classList.add('box');
        box.textContent = '';
        column.appendChild(box);
        
        }
    
};

createColumn();


/**
 * Listen for when the mouse is hovering over a div in the container.
 * Target that event and add a class list of color to change the backgroud
 * color of the div.
 */
gridContainer.addEventListener('mouseover', function (e) {
    console.log(e.target);
    e.target.classList.add('color');
    
});





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