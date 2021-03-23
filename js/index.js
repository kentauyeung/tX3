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

cellOne.addEventListener('click', takeCellOne)
cellTwo.addEventListener('click', takeCellTwo)
cellThree.addEventListener('click', takeCellThree)
cellFour.addEventListener('click', takeCellFour)
cellFive.addEventListener('click', takeCellFive)
cellSix.addEventListener('click', takeCellSix)
cellSeven.addEventListener('click', takeCellSeven)
cellEight.addEventListener('click', takeCellEight)
cellNine.addEventListener('click', takeCellNine)

function takeCellOne() {
    count ++
    isEven(count) ? cellOne.style.background = 'red' : cellOne.style.background = 'blue'
}

function takeCellTwo() {
    count ++
    isEven(count) ? cellTwo.style.background = 'red' : cellTwo.style.background = 'blue'
}

function takeCellThree() {
    count ++
    isEven(count) ? cellThree.style.background = 'red' : cellThree.style.background = 'blue'
}

function takeCellFour() {
    count ++
    isEven(count) ? cellFour.style.background = 'red' : cellFour.style.background = 'blue'
}

function takeCellFive() {
    count ++ 
    isEven(count) ? cellFive.style.background = 'red' : cellFive.style.background = 'blue'
}

function takeCellSix() {
    count ++
    isEven(count) ? cellSix.style.background = 'red' : cellSix.style.background = 'blue'
}

function takeCellSeven() {
    count ++
    isEven(count) ? cellSeven.style.background = 'red' : cellSeven.style.background = 'blue'
}

function takeCellEight() {
    count ++
    isEven(count) ? cellEight.style.background = 'red' : cellEight.style.background = 'blue'
}

function takeCellNine() {
    count ++
    isEven(count) ? cellNine.style.background = 'red' : cellNine.style.background = 'blue'
}

function isEven(n){
    return n % 2 === 0
}