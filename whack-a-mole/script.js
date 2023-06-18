const squares  = document.querySelectorAll('.square') //to get all the squares
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score2')

let result = 0
let currentTime = 60
let hitPosition
let timerId = null

function randomSquare() {
    //to remove the mole class for each of the squares if they already have it, i.e. refresh
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    //to get random squares at any time
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole') //to add the mole class to the random square generated

    hitPosition = randomSquare.id //to save the id of the square

}

//to listen for a click on the mole for the score

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id == hitPosition){
            result++
            score.innerHTML = result
            hitPosition  = null //to clear out the hit position
        }
    }, false)
})


//a function for the mole to automaticllay move as above without manual refreshing
function moveMole(){
    // the setInterval function takes a function to do, and a time interval in ms
    timerId  = setInterval(randomSquare, 1000);
}

moveMole() //can be attached to a button

//to set anintterval for the timer after 1000ms
let countDownTimerId = setInterval(countDown, 500)

//function to work the timer
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        //clear the time interval and basically stop timing
        clearInterval(countDownTimerId)
        //to stop the mole from moving
        clearInterval(timerId)
        alert('GAMe OVER! Your final score is '+result)
        result = 0
        // restart()
    }
}


countDown()













