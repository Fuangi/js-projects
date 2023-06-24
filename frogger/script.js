//
const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const controlButton = document.querySelector('#control')
const squares = document.querySelectorAll('.grid div')
let currentIndex = 76
const leftLogs = document.querySelectorAll('.log-left')
const rightLogs = document.querySelectorAll('.log-right')
const leftCars = document.querySelectorAll('.car-left')
const rightCars = document.querySelectorAll('.car-right')
console.log(squares)
const width = 9
let timerId
let outcomeTimerId
let currentTime = 20

function moveFrog(e){

    squares[currentIndex].classList.remove('frog')

    switch(e.key){
        case 'ArrowLeft':
            if(currentIndex % width !== 0) //to stop movement at the left edge
               currentIndex -= 1
            break;
        case 'ArrowRight':
            if(currentIndex % width < width - 1) 
            currentIndex += 1
            break;
        case 'ArrowUp':
            if(currentIndex - width >= 0)
            currentIndex -= width
            break;
        case 'ArrowDown':
            if(currentIndex + width < width * width)
            currentIndex += width
            break;
    }
    //adding the frog to the board
    squares[currentIndex].classList.add('frog')
}

function autoMoveElements() {
    currentTime--
    timeLeftDisplay.innerHTML = currentTime
    leftLogs.forEach(leftLog => moveLogLeft(leftLog));
    rightLogs.forEach(rightLog => moveLogRight(rightLog));
    leftCars.forEach(leftCar=> moveCarLeft(leftCar));
    rightCars.forEach(rightCar=> moveCarRight(rightCar));
}

function moveLogLeft(leftLog) {
    switch(true){
        case leftLog.classList.contains('l1'):
            leftLog.classList.remove('l1')
            leftLog.classList.add('l2')
            break
        
        case leftLog.classList.contains('l2'):
            leftLog.classList.remove('l2')
            leftLog.classList.add('l3')
            break
        case leftLog.classList.contains('l3'):
            leftLog.classList.remove('l3')
            leftLog.classList.add('l4')
            break
            
        case leftLog.classList.contains('l4'):
            leftLog.classList.remove('l4')
            leftLog.classList.add('l5')
            break
        case leftLog.classList.contains('l5'):
            leftLog.classList.remove('l5')
            leftLog.classList.add('l1')
            break
    }
}
function moveLogRight(rightLog) {
    switch(true){
        case rightLog.classList.contains('l1'):
            rightLog.classList.remove('l1')
            rightLog.classList.add('l5')
            break
        
        case rightLog.classList.contains('l2'):
            rightLog.classList.remove('l2')
            rightLog.classList.add('l1')
            break
        case rightLog.classList.contains('l3'):
            rightLog.classList.remove('l3')
            rightLog.classList.add('l2')
            break
            
        case rightLog.classList.contains('l4'):
            rightLog.classList.remove('l4')
            rightLog.classList.add('l3')
            break
        case rightLog.classList.contains('l5'):
            rightLog.classList.remove('l5')
            rightLog.classList.add('l4')
            break
    }
}

function moveCarLeft(leftCar){
    switch(true){
        case leftCar.classList.contains('c1'):
            leftCar.classList.remove('c1')
            leftCar.classList.add('c2')
            break
            
        case leftCar.classList.contains('c2'):
            leftCar.classList.remove('c2')
            leftCar.classList.add('c3')
            break
        case leftCar.classList.contains('c3'):
            leftCar.classList.remove('c3')
            leftCar.classList.add('c1')
            break
    }
}
function moveCarRight(rightCar){
    switch(true){
        case rightCar.classList.contains('c1'):
            rightCar.classList.remove('c1')
            rightCar.classList.add('c3')
            break
            
        case rightCar.classList.contains('c2'):
            rightCar.classList.remove('c2')
            rightCar.classList.add('c1')
            break
        case rightCar.classList.contains('c3'):
            rightCar.classList.remove('c3')
            rightCar.classList.add('c2')
            break
    }
}

//the c1 is a car(black) and the l4 and l5 are water so if the frog gets hit or falls in the water u lose
function lose(){
    if(
        squares[currentIndex].classList.contains('c1') || squares[currentIndex].classList.contains('l4') || squares[currentIndex].classList.contains('l5') ||
        currentTime <= 0
    ){
        resultDisplay.textContent = "You lose!"
        clearInterval(timerId)
        clearInterval(outcomeTimerId) //to pause it
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup', moveFrog)
    }
}

function win() {
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = "You Win!"
        clearInterval(timerId)
        clearInterval(outcomeTimerId) //to pause it
        document.removeEventListener('keyup', moveFrog)

    }
}
controlButton.addEventListener('click', () =>{
    if(timerId){
        clearInterval(timerId) //to pause it
        clearInterval(outcomeTimerId) //to pause it
        timerId = null
        outcomeTimerId = null
        document.removeEventListener('keyup', moveFrog, false)
    }else{
        timerId = setInterval(autoMoveElements, 1000)
        outcomeTimerId = setInterval(()=>{
            lose()
            win()
        }, 50)
        document.addEventListener('keyup', moveFrog, false)
        //to start the game
    }
})
