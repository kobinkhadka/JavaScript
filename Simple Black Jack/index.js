

//Before game starts

let cards = []
let sum = 0 
let hasBlackJack= false; 
let isAlive = false; 


let messageEl = document.getElementById("message-el")
let showSum = document.getElementById("total")
let showCard = document.getElementById("card")
let showPlayerInfo = document.getElementById('player')



let player = { 
    name: "Kobin", 
    chips: 500
}



//Start game: 
// startGame() just call the rendergame() function each time start game button is pressed

function startGame() {

    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    cards = [firstCard, secondCard]

    sum =  firstCard + secondCard

    showPlayerInfo.textContent = player.name + ": " + "$" + player.chips


    player.chips -= 10
    renderGame()
}


//What renderGame() function does: 
/* If player click on star game function it will trigger renderGame() function
   First it show two cards in element where id = card 
   and shows all the card player has in hand then it checks to see
   if the sum is 21 or less or more and display appropriate message
   with sum */


function renderGame(){


    //show card  in element with id = card

    showCard.textContent = "Cards: "


    // Show cards in hand
    for(let i = 0; i < cards.length; i++){
        showCard.textContent += cards[i] + " "
    
    }
    //check total is less than 21 in hand

    if(sum < 21) { 
        messageEl.textContent= ("Do you want to draw a new card?")

    } else if (sum === 21) { 
        messageEl.textContent= ("WOhoo ! We win big DWAG  !")
        hasBlackJack = true; 
    } else {
        messageEl.textContent= ("Bruh You Out !! Now give me that moneeeyyyy")
        isAlive = false; 
    }   

    // Display sum
    showSum.textContent = "Sum: " + sum

}

/* What newCArd() function does ? 
if player clicks on new card button this will trigger newCard() function
newCArd function create a new card add that card to the sum of previous two cards
and it pushes the new card to Cards Array and then it calls the renderGame() again. 
and rendergame() displays that card and all the card that is added by clicking on 
new card button. It then, check if value is less, equal or  more than 21 and show the
appropriate message with total sum of all cards.
*/

let showNewCard = document.getElementById("newCard-button")

function newCard() { 


    if (isAlive === true && hasBlackJack === false){

        let newCard = getRandomCard()

        sum += newCard

        cards.push(newCard)

        



        renderGame()

    }

}

//getRandomCard*() return random cards between 1 t0 13 and if the card is 

// 11 - jack , 12- queen, 13 - King  it will set the value to 10

function getRandomCard(){

    let randomNumber =  Math.floor(Math.random() * 13) + 1

    if(randomNumber > 10) { return 10; 


    } else if (randomNumber === 1){return 11;


    } else {return randomNumber}
}






