const container = document.getElementById('container');

//First, Create a 16x16 grid of square divs using DOMs

//TO FIX: appending box mulitiple times results in only the
//Last append showing. Need to figure out how to append multiple times

//Make a function that appends the children and put that function in
//a loop for dersired number of times


//Create a variable to be used when identifying if the user clicks anywhere on the page
const canvas = document.querySelector('body'); 

//NOT YET IN USE: when the user clicks, a grid is created
//canvas.addEventListener('click', createGrid());


//NOT YET IN USE
function createGrid(){
    //call createColumn
    //for (let i= 6; i>0; i--){
    //    createColumn();
   // }
};


/*11/9/22 3:56pm
When createBox is called through createColumn, the for loop runs and appends box to
column the desired number of times. But each append does not visually add another box.
It seems to replace the same one that was already created.

Looping through createColumn multiple times does add new boxes visually. It adds them
by creating a new row or appending the new box under the previous. 

Next step: Create multiple columns
*/
let column = document.createElement('div');
function createColumn(){
    //loop through to build node divs with column CSS class
    //call createBox
    
    for (let i = 6; i>0; i--){
        column.classList.add('column');
        container.appendChild(column);
        createBox();
    }
};

function createBox(){
    //loop through to build node divs with box CSS class
    let box = document.createElement('div');
    for (let i = 6; i>0; i--){
        box.classList.add('box');
        box.textContent = 'test';
        column.appendChild(box);
    }
};

createColumn();
//createGrid();


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