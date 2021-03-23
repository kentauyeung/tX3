const cellOne = document.querySelector('.c1')
const cellTwo = document.querySelector('.c2')
const cellThree = document.querySelector('.c3')
const cellFour = document.querySelector('.c4')
const cellFive = document.querySelector('.c5')
const cellSix = document.querySelector('.c6')
const cellSeven = document.querySelector('.c7')
const cellEight = document.querySelector('.c8')
const cellNine = document.querySelector('.c9')
let count = 0

cellOne.addEventListener('click', takeCell)
cellTwo.addEventListener('click', takeCell)
cellThree.addEventListener('click', takeCell)
cellFour.addEventListener('click', takeCell)
cellFive.addEventListener('click', takeCell)
cellSix.addEventListener('click', takeCell)
cellSeven.addEventListener('click', takeCell)
cellEight.addEventListener('click', takeCell)
cellNine.addEventListener('click', takeCell)

function takeCell() {
    count ++
    if(isEven(count)) {
        cellOne.style.background = 'red'
    } else {
        cellOne.style.background = 'blue'
    }
}

function isEven(n){
    return n % 2 === 0
}