console.log('Working');
// var guess = document.getElementById('guess').value;
var num = Math.floor(Math.random() * 50);
//returns a random number form 0 to 50, math.floor rounds down to nearest interger and math.random gives a random num 0 <= num <1
console.log(num);
var times = 0;
var check = document.getElementById('submit');
check.addEventListener('click', checkGuess, false);

var output = document.getElementById('show');

function checkGuess(guess){
    do{
    // var sec = Number(prompt('Guess a number: '))
    var sec = document.getElementById('number').value;
    if(sec == num){
        output.innerHTML = 'Congrats, you guessed right in '+ (times+1) + ' guess(es)';
    } 
    else if(sec > num){
        output.innerHTML = 'The guess is bigger than the number';
    }
    else if(sec < num){
        output.innerHTML = 'The guess is smaller than the number';
    }
/*     else{
       alert('Invalid guess');
    } */
    times+=1
}
while(times < 5
     && sec != num);
}

var reset = document.getElementById('reset');
reset.addEventListener('click', resetGuess, false);
function resetGuess(times){

    times = 0;
}

//Level Two
function levelTwo(guess){
    var lev = Number(prompt('Enter a number between 1 and 150'))
    var second = Math.floor(Math.random() * 150);
}
