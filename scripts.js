const gameContainer = document.querySelector(`#gameContainer`);


const selectSize = () => {
    let playerChoice = prompt("size:");
    if ((playerChoice > 64) || (playerChoice < 4)) { alert("4<allowed.size<64") }
    else return playerChoice;

}

const buildBoard = (inputSize) => {
    console.log(inputSize);
    column: for (i = 0; i < inputSize; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.setAttribute('id', `Column:${i}`);
        columnDiv.classList.add('column');
        gameContainer.appendChild(columnDiv);
        row: for (let j = 0; j < inputSize; j++) {
            const gridDiv = document.createElement(`div`);
            gridDiv.classList.add('gridDiv');
            gridDiv.setAttribute('id', `I${i}J${j}`);
            columnDiv.appendChild(gridDiv);
        }
    }
}


const addMouseoverEvent = () => {
    const gridDiv = document.querySelectorAll('.gridDiv');
    for (i = 0; i < gridDiv.length; i++) {
        let colorGrid = gridDiv[i]
        colorGrid.addEventListener('mouseover', (e) => {
            colorGrid.classList.add('colored');
        });
    
    }
}



const newBoard = document.querySelector(`#newBoard`);
newBoard.addEventListener('click', () => {
    removeChildren();
    buildBoard(selectSize());
    addMouseoverEvent();
    
})



let removeChildren = () => {
    while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
    }
}





