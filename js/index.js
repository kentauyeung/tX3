const cellOne = document.querySelector('.c1')
const cellTwo = document.querySelector('.c2')
const cellThree = document.querySelector('.c3')
const cellFour = document.querySelector('.c4')
const cellFive = document.querySelector('.c5')
const cellSix = document.querySelector('.c6')
const cellSeven = document.querySelector('.c7')
const cellEight = document.querySelector('.c8')
const cellNine = document.querySelector('.c9')
let startArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let playingArr = []

cellOne.addEventListener('click', takeCellOne)
// cellTwo.addEventListener('click', takeCellTwo)
// cellThree.addEventListener('click', takeCellThree)
// cellFour.addEventListener('click', takeCellFour)
// cellFive.addEventListener('click', takeCellFive)
// cellSix.addEventListener('click', takeCellSix)
// cellSeven.addEventListener('click', takeCellSeven)
// cellEight.addEventListener('click', takeCellEight)
// cellNine.addEventListener('click', takeCellNine)

function takeCellOne() {
    cellOne.style.background = 'red'
    playingArr = startArr.filter( num => num !== 1)
    botsTurn(playingArr)

}

// function takeCellTwo() {
//     count ++
//     isEven(count) ? cellTwo.style.background = 'red' : cellTwo.style.background = 'blue'
// }

// function takeCellThree() {
//     count ++
//     isEven(count) ? cellThree.style.background = 'red' : cellThree.style.background = 'blue'
// }

// function takeCellFour() {
//     count ++
//     isEven(count) ? cellFour.style.background = 'red' : cellFour.style.background = 'blue'
// }

// function takeCellFive() {
//     count ++ 
//     isEven(count) ? cellFive.style.background = 'red' : cellFive.style.background = 'blue'
// }

// function takeCellSix() {
//     count ++
//     isEven(count) ? cellSix.style.background = 'red' : cellSix.style.background = 'blue'
// }

// function takeCellSeven() {
//     count ++
//     isEven(count) ? cellSeven.style.background = 'red' : cellSeven.style.background = 'blue'
// }

// function takeCellEight() {
//     count ++
//     isEven(count) ? cellEight.style.background = 'red' : cellEight.style.background = 'blue'
// }

// function takeCellNine() {
//     count ++
//     isEven(count) ? cellNine.style.background = 'red' : cellNine.style.background = 'blue'
// }


// function isWinner() {

// }

//Returns a random number from 1 - 9
function botsTurn(arr) {
    let randomIdx = Math.floor( Math.random() * ( arr.length - 1) )

    if( arr[randomIdx] === 1 ) {
        arr = arr.filter( num => num !== 1)
        return cellOne.style.background = 'blue'
    } else if ( arr[randomIdx] ) {
        return cellTwo.style.background = 'blue'
    } else if ( random === 3 && isPlayable(cellThree) ) {
        return cellThree.style.background = 'blue'
    } else if ( random === 4 && isPlayable(cellFour) ) {
        return cellFour.style.background = 'blue'
    } else if ( random === 5 && isPlayable(cellFive) ) {
        return cellFive.style.background = 'blue'
    } else if ( random === 6 && isPlayable(cellSix) ) {
        return cellSix.style.background = 'blue'
    } else if ( random === 7 & isPlayable(cellSeven) ) {
        return cellSeven.style.background = 'blue'
    } else if (random === 8 && isPlayable(cellEight) ) {
        return cellEight.style.background = 'blue'
    } else if (random === 9 && isPlayable(cellNine) ) {
        return cellNine.style.background = 'blue'
    }
}


// function isPlayable(cell) {
//     return cell.style.background = 'grey'
// }