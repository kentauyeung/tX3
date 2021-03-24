const cellOne = document.querySelector('.c1')
const cellTwo = document.querySelector('.c2')
const cellThree = document.querySelector('.c3')
const cellFour = document.querySelector('.c4')
const cellFive = document.querySelector('.c5')
const cellSix = document.querySelector('.c6')
const cellSeven = document.querySelector('.c7')
const cellEight = document.querySelector('.c8')
const cellNine = document.querySelector('.c9')
const reset = document.querySelector('#reset')
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

function takeCellOne() {
    cellOne.style.background = 'red'
    cellsRemain = startCells.filter( num => num !== 1 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellTwo() {
    cellTwo.style.background = 'red'
    cellsRemain = startCells.filter( num => num !== 2 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellThree() {
    cellThree.style.background = 'red' 
    cellsRemain = startCells.filter( num => num !== 3 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellFour() {
    cellFour.style.background = 'red'
    cellsRemain = startCells.filter( num => num !== 4 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellFive() {
    cellFive.style.background = 'red' 
    cellsRemain = startCells.filter( num => num !== 5 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellSix() {
    cellSix.style.background = 'red'
    cellsRemain = startCells.filter( num => num !== 6 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellSeven() {
    cellSeven.style.background = 'red'
    cellsRemain = startCells.filter( num => num !== 7 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellEight() {
    cellEight.style.background = 'red'
    cellsRemain = startCells.filter( num => num !== 8 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

function takeCellNine() {
    cellNine.style.background = 'red'
    cellsRemain = startCells.filter( num => num !== 9 )
    startCells = cellsRemain
    botsTurn(startCells)
    isWinner()
}

// Bot's function
function botsTurn(arr) {
    let randomIdx = Math.floor( Math.random() * ( arr.length - 1) + 1)
    console.log(`index: ${randomIdx}, number: ${arr[randomIdx]}, array: ${arr}`)
    if( arr[randomIdx] === 1 ) {
        startCells = arr.filter( num => num !== 1 )
        return cellOne.style.background = 'blue'
    } else if ( arr[randomIdx] === 2 ) {
        startCells = arr.filter( num => num !== 2 )
        return cellTwo.style.background = 'blue'
    } else if ( arr[randomIdx] === 3 ) {
        startCells = arr.filter( num => num !== 3 )
        return cellThree.style.background = 'blue'
    } else if ( arr[randomIdx] === 4 ) {
        startCells = arr.filter( num => num !== 4 )
        return cellFour.style.background = 'blue'
    } else if ( arr[randomIdx] === 5 ) {
        startCells = arr.filter( num => num !== 5 )
        return cellFive.style.background = 'blue'
    } else if ( arr[randomIdx] === 6 ) {
        startCells = arr.filter( num => num !== 6 )
        return cellSix.style.background = 'blue'
    } else if ( arr[randomIdx] === 7 ) {
        startCells = arr.filter( num => num !== 7 )
        return cellSeven.style.background = 'blue'
    } else if (arr[randomIdx] === 8 ) {
        startCells = arr.filter( num => num !== 8 )
        return cellEight.style.background = 'blue'
    } else if ( arr[randomIdx] === 9 ) {
        startCells = arr.filter( num => num !== 9 )
        return cellNine.style.background = 'blue'
    }
}

function isWinner() {
    if(cellOne.style.background === 'red' && cellTwo.style.background === 'red' && cellThree.style.background === 'red'
        || cellFour.style.background === 'red' && cellFive.style.background === 'red' && cellSix.style.background === 'red'
        || cellSeven.style.background === 'red' && cellEight.style.background === 'red' && cellNine.style.background === 'red'
        || cellOne.style.background === 'red' && cellFour.style.background === 'red' && cellSeven.style.background === 'red'
        || cellTwo.style.background === 'red' && cellFive.style.background === 'red' && cellEight.style.background === 'red'
        || cellThree.style.background === 'red' && cellSix.style.background === 'red' && cellNine.style.background === 'red'
        || cellOne.style.background === 'red' && cellFive.style.background === 'red' & cellNine.style.background === 'red' 
        || cellThree.style.background === 'red' && cellFive.style.background === 'red' && cellSeven.style.background === 'red') {
        alert("WINNER!")
        resetGame()
    }
    if()
}

function resetGame() {
    startCells = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    cellOne.style.background = 'grey'
    cellTwo.style.background = 'grey'
    cellThree.style.background = 'grey'
    cellFour.style.background = 'grey'
    cellFive.style.background = 'grey'
    cellSix.style.background = 'grey'
    cellSeven.style.background = 'grey'
    cellEight.style.background = 'grey'
    cellNine.style.background = 'grey'
}