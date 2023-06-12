//getting the choices and all
const yourChoice = document.getElementById('your-choice')
const compChoice = document.getElementById('comp-choice')
const resultDisplay = document.getElementById('result')
const yourScoreDisplay = document.getElementById('score')
const compScoreDisplay = document.getElementById('comp-score')
const choices = document.querySelectorAll('button') //to get all buttons on the page (if you don't want all, use a class)
let userChoice
let computerChoice
let result
let score = 0
let compScore = 0
/* display the your choice.
the for each loops throug and does that action for each value. the arrow function with (e), e is the event object and it listens for teh event then takes the element that it occured on (target)'s id and display it */ 
choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoice.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// this is to automatically generate the computer's choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or choices.length
    //this is to round down a random number from 1 to 3
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }if(randomNumber === 2){
        computerChoice = 'Paper'
    }if(randomNumber === 3){
        computerChoice = 'Scissors'
    }
    compChoice.innerHTML = computerChoice
}
function getResult(){
if(computerChoice === userChoice){
    result = "It's a draw! 🤝"
}
if(computerChoice === 'Paper' && userChoice === 'Rock'){
    result = "You lose😏😂!"
    score -= 1
    compScore += 1
}
if(computerChoice === 'Rock' && userChoice === 'Scissors'){
    result = "You lose 😏😂!"
    score -= 1
    compScore += 1
}
if(computerChoice === 'Rock' && userChoice === 'Paper'){
    result = "You won 😁🥳"
    score += 1
    compScore -= 1
}
if(computerChoice === 'Scissors' && userChoice === 'Paper'){
    result = "You lose 😏😂"
    score -= 1
    compScore += 1
}
if(computerChoice === 'Paper' && userChoice === 'Scissors'){
    result = "You win 😁🥳"
    score += 1
    compScore -= 1
}
if(computerChoice === 'Scissors' && userChoice === 'Rock'){
    result = "You win😁🥳"
    score += 1
    compScore -= 1
}
resultDisplay.innerHTML = result
yourScoreDisplay.innerHTML = score
compScoreDisplay.innerHTML = compScore
}

