const container = document.getElementById('container');

let column = document.createElement('div');
let box = document.createElement('div');

//First, Create a 16x16 grid of square divs using DOMs

//TO FIX: appending box mulitiple times results in only the
//Last append showing. Need to figure out how to append multiple times

//Make a function that appends the children and put that function in
//a loop for dersired number of times


//NOT YET IN USE: when the user clicks, a grid is created
//Create a variable to be used when identifying if the user clicks anywhere on the page
const canvas = document.querySelector('body'); 
//canvas.addEventListener('click', createColumn());


/*11/9/22 4:22pm
Problem: Part of the reason why all new boxes are appended in the same column
is because there is only one column div that has been created.

Solution: dynamically create a new column in the DOM once the loop to create a box(s)
has finished. Then tell the DOM to add boxes to the newly created column


/*11/9/22 3:56pm
When createBox is called through createColumn, the for loop runs and appends box to
column the desired number of times. But each append does not visually add another box.
It seems to replace the same one that was already created.

Looping through createColumn multiple times does add new boxes visually. It adds them
by creating a new row or appending the new box under the previous. 

Next step: Create multiple columns
*/

/**
 * createColumn and createBox functions are used to access the DOM to 
 * add div nodes resulting in a grid of empty div nodes being created.
 * CreateColumn creates a child div node inside of container with a column
 * flex-flow. That column div will then be the parent of a box div node.
 * When a new column is created, it will be fill with box div nodes according
 * to the loop. This will repeat until the column loop is completed.
 */
function createColumn(){
    //loop through to build node divs with column CSS class
    //call createBox
    
    for (let i = 10; i>0; i--){
        column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        createBox();
    }
};

function createBox(){
    //loop through to build node divs with box CSS class    


        for (let i = 10; i>0; i--){
        box = document.createElement('div');
        box.classList.add('box');
        box.textContent = '';
        column.appendChild(box);
        }
    
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