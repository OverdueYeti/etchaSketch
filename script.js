function createGrid(size){
    const container = document.getElementById('grid')
    // -2 for the 2px border
    const cellSize = (800 / size) - 2; 
    // Clear Old Grid
    container.innerHTML = '';

    for(let i = 0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('Axis');
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;

        container.append(div);
       
    }     
}

function highlight(){

}

createGrid(16)
const container = document.getElementById('grid');

// turns the boxes in the grid lightblue
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('Axis')){
        e.target.style.backgroundColor = 'lightblue';
    }
});

const resizeBtn = document.getElementById('resizeBtn');

//allows for user input to change the grid size and clears the previous grid
resizeBtn.addEventListener('click', (e) => {
    let size = prompt("Enter what size grid you would like by choosing a number from 1-100");
    createGrid(size);
})