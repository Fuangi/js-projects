const squares = document.querySelectorAll('.grid div')
const resultDisplay = document.querySelector('#result')
const displayCurrentPlayer = document.querySelector('#current-player')
    
let currentPlayer = 1
    
function checkBoard(){
    
}

for(let i = 0; i < squares.length; i++){
    squares[i].onclick = () => {
        //if the square below current square is taken, you can go ontop
        console.log(squares[i] +" " + i + " " + "" +(i + 7))
        console.log(squares[i].classList)
        if(squares[i + 7].classList.contains('taken')){
            //adding ? after a property checks if it' available. if not it executes the ele statement like adding it after ..i + 7
            if(currentPlayer == 1){
                squares[i].classList.add('taken')
                squares[i].classList.add('player1')
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else if(currentPlayer == 2){
                squares[i].classList.add('taken')
                squares[i].classList.add('player2')
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            }
        }else {
            alert("Can't go here")
        }
        checkBoard()
    }
}


