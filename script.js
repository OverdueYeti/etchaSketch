function createGrid(xAxis, yAxis){
    const container = document.getElementById('grid')

    for(let i = 0; i < xAxis * yAxis; i++){
        const div = document.createElement('div');
        div.classList.add('Axis');
        container.append(div);
       
    }     
}

function highlight(){

}

createGrid(16, 16);

const container = document.getElementById('grid')

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('Axis')){
        e.target.style.backgroundColor = 'lightblue';
    }
});