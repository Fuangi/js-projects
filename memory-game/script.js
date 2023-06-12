//declaring an array to hold the images(as objects) that the user will see 
const cardsArray = [
    {
        picName: 'doc-faq',
        img: 'images/doc-faq.png'
    },
    {
        picName: 'doc-heart',
        img: 'images/doc-heart.png'
    },
    {
        picName: 'doctor',
        img: 'images/doctor.png'
    },
    {
        picName: 'records',
        img: 'images/records.png'
    },
    {
        picName: 'reminder',
        img: 'images/reminder.png'
    },
    {
        picName: 'stethoscope',
        img: 'images/stetho.png'
    },
    {
        picName: 'doc-faq',
        img: 'images/doc-faq.png'
    },
    {
        picName: 'doc-heart',
        img: 'images/doc-heart.png'
    },
    {
        picName: 'doctor',
        img: 'images/doctor.png'
    },
    {
        picName: 'records',
        img: 'images/records.png'
    },
    {
        picName: 'reminder',
        img: 'images/reminder.png'
    },
    {
        picName: 'stethoscope',
        img: 'images/stetho.png'
    }
]

/* sorting the array in a random order by using the sort() method and math.random. 
the 0.5 is so that it should be */
cardsArray.sort(()=> 0.5 - Math.random()) //this is advance. REMEMBER TO SEARCH THIS!
let cardsChosen = [] //an array to check the cards chosen if they match
let cardsChosenId = [] //to store the ids of the cards chosen
const cardsWon = [] //to collect and store the cards that have been won
let result = document.querySelector('#result')

//to get the grid to display the cards 
const gridDisplay = document.querySelector('#grid') //to show that it's looking for an id

//to ceate a function that creates an image element
function createBoard(){
    for(let i = 0; i <cardsArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/available.png')
        card.setAttribute('data-id', i) //to give each a unique id
        card.addEventListener('click', flipCard, false)
      //adding the cards to the grid in the browser
      gridDisplay.append(card) //append of appendChild can be used
    }
}
createBoard()

//a function to flip the card when it is clicked
function flipCard(){
    let cardId = this.getAttribute('data-id') //to get the attribute of the element that has been clicked
    // console.log(cardsArray[cardId].picName) to show info about the clicked card
    cardsChosen.push(cardsArray[cardId].picName) // to send the name of the chosen card into the array
    // console.log('clicked', cardId)

    cardsChosenId.push(cardId) //to push the id of the chosen cards

    console.log(cardsChosen);
    console.log(cardsChosenId);

    // console.log(cardsChosen)

    //to flip the card when it's clicked
    this.setAttribute('src', cardsArray[cardId].img)

    //to check if 2 cards have been chosen 

    if(cardsChosen.length === 2){
        //check the match after some time has passed
        setTimeout(checkMatch, 800) //the function to call, after a designated time 
    }
}

function checkMatch(){
    //getting all the images in he grid
   const card = document.querySelectorAll('img') //if we want to use other images not related, use #grid img
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    //to notify if the same card has been clicked
    if(optionOneId == optionTwoId){
        card[optionOneId].setAttribute('src', 'images/available.png')
        card[optionTwoId].setAttribute('src', 'images/available.png')
        alert("you clicked the same card")
    }
//to check if the cards chosen match
    if(cardsChosen[0] == cardsChosen[1]){
        alert("You found a match!, you're doing great👊👍")
        //to remove the cards from the list 
        card[optionOneId].setAttribute('src', 'images/a1.jpg')
        card[optionTwoId].setAttribute('src', 'images/a1.jpg')
     //to stop the cards from listening to the click event
        card[optionOneId].removeEventListener('click', flipCard, false) 
        card[optionTwoId].removeEventListener('click', flipCard, false) 
    //to put the cards into the won category
    cardsWon.push(cardsChosen)
    }else{ //to flip them back if they are not the same
        card[optionOneId].setAttribute('src', 'images/available.png')
        card[optionTwoId].setAttribute('src', 'images/available.png')
        alert("Sorry, try again")
    }
    //setting the cards chosen array and the chosen id array to empy to start over
    cardsChosen = []
    cardsChosenId = []
    result.textContent = cardsWon.length
    //if all the cards have been won, do something
    if(cardsWon.length == cardsArray.length/2){
       result.textContent = "Congratulations!, you won all!"
    }
}
