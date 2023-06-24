const trialsDisplay = document.getElementById('trials')
const checkResult = document.getElementById('check-result')
let number = document.getElementById('number')

let trials = 5
let randomNumber = Math.floor(Math.random() * 51)

function getRandomNumber(){
    if(number.value == randomNumber){
        alert('You guessed it right!')
    }else if(number.value > randomNumber){
        alert('guess is bigger than number')
        trials -= 1
        trialsDisplay.textContent = trials
    }else {
        alert("Guess is smaller than number")
        trials -= 1
        trialsDisplay.textContent = trials
    }
}

checkResult.addEventListener('click', getRandomNumber)