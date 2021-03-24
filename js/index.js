const cellOne = document.querySelector('.c1')
const cellTwo = document.querySelector('.c2')
const cellThree = document.querySelector('.c3')
const cellFour = document.querySelector('.c4')
const cellFive = document.querySelector('.c5')
const cellSix = document.querySelector('.c6')
const cellSeven = document.querySelector('.c7')
const cellEight = document.querySelector('.c8')
const cellNine = document.querySelector('.c9')
const reset = document.querySelector('.reset')
let startCells = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let cellsRemain = []

cellOne.addEventListener('click', takeCellOne)
cellTwo.addEventListener('click', takeCellTwo)
cellThree.addEventListener('click', takeCellThree)
cellFour.addEventListener('click', takeCellFour)
cellFive.addEventListener('click', takeCellFive)
cellSix.addEventListener('click', takeCellSix)
cellSeven.addEventListener('click', takeCellSeven)
cellEight.addEventListener('click', takeCellEight)
cellNine.addEventListener('click', takeCellNine)
reset.addEventListener('click', resetGame)

// Player's function
function takeCellOne() {
    cellOne.style.background = 'tomato'
    cellsRemain = startCells.filter( num => num !== 1 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellTwo() {
    cellTwo.style.background = 'tomato'
    cellsRemain = startCells.filter( num => num !== 2 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellThree() {
    cellThree.style.background = 'tomato' 
    cellsRemain = startCells.filter( num => num !== 3 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellFour() {
    cellFour.style.background = 'tomato'
    cellsRemain = startCells.filter( num => num !== 4 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellFive() {
    cellFive.style.background = 'tomato' 
    cellsRemain = startCells.filter( num => num !== 5 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellSix() {
    cellSix.style.background = 'tomato'
    cellsRemain = startCells.filter( num => num !== 6 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellSeven() {
    cellSeven.style.background = 'tomato'
    cellsRemain = startCells.filter( num => num !== 7 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellEight() {
    cellEight.style.background = 'tomato'
    cellsRemain = startCells.filter( num => num !== 8 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellNine() {
    cellNine.style.background = 'tomato'
    cellsRemain = startCells.filter( num => num !== 9 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

// Bot's function
function botsTurn(arr) {
    let randomIdx = Math.floor( Math.random() * ( arr.length - 1) + 1)
    if( arr[randomIdx] === 1 ) {
        startCells = arr.filter( num => num !== 1 )
        isWinner()
        cellOne.style.background = 'skyblue'
    } else if ( arr[randomIdx] === 2 ) {
        startCells = arr.filter( num => num !== 2 )
        isWinner()
        cellTwo.style.background = 'skyblue'
    } else if ( arr[randomIdx] === 3 ) {
        startCells = arr.filter( num => num !== 3 )
        isWinner()
        cellThree.style.background = 'skyblue'
    } else if ( arr[randomIdx] === 4 ) {
        startCells = arr.filter( num => num !== 4 )
        isWinner()
        cellFour.style.background = 'skyblue'
    } else if ( arr[randomIdx] === 5 ) {
        startCells = arr.filter( num => num !== 5 )
        isWinner()
        cellFive.style.background = 'skyblue'
    } else if ( arr[randomIdx] === 6 ) {
        startCells = arr.filter( num => num !== 6 )
        isWinner()
        cellSix.style.background = 'skyblue'
    } else if ( arr[randomIdx] === 7 ) {
        startCells = arr.filter( num => num !== 7 )
        isWinner()
        cellSeven.style.background = 'skyblue'
    } else if (arr[randomIdx] === 8 ) {
        startCells = arr.filter( num => num !== 8 )
        isWinner()
        cellEight.style.background = 'skyblue'
    } else if ( arr[randomIdx] === 9 ) {
        startCells = arr.filter( num => num !== 9 )
        isWinner()
        cellNine.style.background = 'skyblue'
    }
}

// Check for Winner function
function isWinner() {
    if(cellOne.style.background === 'tomato' && cellTwo.style.background === 'tomato' && cellThree.style.background === 'tomato'
        || cellFour.style.background === 'tomato' && cellFive.style.background === 'tomato' && cellSix.style.background === 'tomato'
        || cellSeven.style.background === 'tomato' && cellEight.style.background === 'tomato' && cellNine.style.background === 'tomato'
        || cellOne.style.background === 'tomato' && cellFour.style.background === 'tomato' && cellSeven.style.background === 'tomato'
        || cellTwo.style.background === 'tomato' && cellFive.style.background === 'tomato' && cellEight.style.background === 'tomato'
        || cellThree.style.background === 'tomato' && cellSix.style.background === 'tomato' && cellNine.style.background === 'tomato'
        || cellOne.style.background === 'tomato' && cellFive.style.background === 'tomato' & cellNine.style.background === 'tomato' 
        || cellThree.style.background === 'tomato' && cellFive.style.background === 'tomato' && cellSeven.style.background === 'tomato') {
            alert("WINNER!")
            resetGame()
            
    }
    if(cellOne.style.background === 'skyblue' && cellTwo.style.background === 'skyblue' && cellThree.style.background === 'skyblue'
        || cellFour.style.background === 'skyblue' && cellFive.style.background === 'skyblue' && cellSix.style.background === 'skyblue'
        || cellSeven.style.background === 'skyblue' && cellEight.style.background === 'skyblue' && cellNine.style.background === 'skyblue'
        || cellOne.style.background === 'skyblue' && cellFour.style.background === 'skyblue' && cellSeven.style.background === 'skyblue'
        || cellTwo.style.background === 'skyblue' && cellFive.style.background === 'skyblue' && cellEight.style.background === 'skyblue'
        || cellThree.style.background === 'skyblue' && cellSix.style.background === 'skyblue' && cellNine.style.background === 'skyblue'
        || cellOne.style.background === 'skyblue' && cellFive.style.background === 'skyblue' & cellNine.style.background === 'skyblue' 
        || cellThree.style.background === 'skyblue' && cellFive.style.background === 'skyblue' && cellSeven.style.background === 'skyblue') {
            alert("Nice Try!")
            resetGame()
            
    }
}

// Reset Game button
function resetGame() {
    document.location.href=""
}