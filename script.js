
// || CREATE DOM CARDS

let gameBoard = document.querySelector(".game-board");

// create a card deck
let halfCardDeck = ["natsu", "erza", "frieren", "tiger", "bear", "flower"];
let cardDeck = halfCardDeck.concat(halfCardDeck);

cardDeck.forEach(makeNewCard);

// show cards on the board
function makeNewCard() {
    let newCard = document.createElement("div");
    // add card back later
    newCard.classList.add("card");
    gameBoard.appendChild(newCard);
}

// toggle flip of the cards' sides
function toggleCard() {
    this.classList.toggle("card-back");
}

// || START GAME 

const gameBtn = document.querySelector(".new-game-btn");
const cards = document.querySelectorAll(".card");

// event: start button
gameBtn.addEventListener("click", function() {
    shuffleDeck();
    addPicture();
    cards.forEach((card) => {
        card.classList.add("card-back");
        card.addEventListener("click", toggleCard);
        card.addEventListener("click", flipCards);
    })
});

// shuffle deck of cards
function shuffleDeck() {
    for (let i = cardDeck.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
    }
}

// add shuffled pictures (with dataset value = name of the picture)
function addPicture() {
    cards.forEach((card, index) => {
        let name = cardDeck[index];
        card.dataset.picture = name;
        card.style.backgroundImage = "url(./pictures/" + name + ".jpg)";
    });
}

// || MATCH PAIRS & FLIP CARDS

let clickedCards = [];

function flipCards() {

    // if card hasn't been clicked ...
    if (!this.hasAttribute("data-id")) {
        // add card to the array
        clickedCards.push(this);
        // card can be toggled again next round
        this.classList.remove("card-back");
        // card cannot be toggled this round
        this.removeEventListener("click", toggleCard);
        // add tag to know "clicked" cards
        this.setAttribute("data-id", "just-clicked");
    }
    
    if (clickedCards.length == 3) {
        // if player clicks on 3rd card, hide the first 2 & don't allow double click on card
        for (i = 0; i <= 1; i++) {
            clickedCards[i].classList.add("card-back");
            clickedCards[i].addEventListener("click", toggleCard); 
            clickedCards[i].removeAttribute("data-id");
        }
        // remove first 2 cards from the array
        clickedCards.splice(0, 2);
    }
    console.log(clickedCards);
 
}




