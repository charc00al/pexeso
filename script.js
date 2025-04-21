
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
        card.style.visibility="visible";
        card.addEventListener("click", toggleCard);
        card.addEventListener("click", flipAndMatch);
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

function flipAndMatch() {

    if (!this.hasAttribute("data-id")) {
        clickedCards.push(this);
        // card can be toggled again next round
        this.classList.remove("card-back");
        // card cannot be toggled this round
        this.removeEventListener("click", toggleCard);
        // add tag to know "clicked" cards
        this.setAttribute("data-id", "picked");
    }

    // matching cards
    if (clickedCards.length == 2) {
        let firstPicture = clickedCards[0].dataset.picture;
        let secondPicture = clickedCards[1].dataset.picture;
    
        // check for match
        if (firstPicture == secondPicture) {
            console.log("MATCH");
            // hide matched cards
            clickedCards.forEach((matched) => {
                setTimeout(() => {
                    matched.style.visibility="hidden";
                }, 500);
            })
        // flip chosen pair of cards after few seconds
        } /* else {
            cards.forEach((card) => {
                setTimeout(() => {
                    card.classList.add("card-back");
                }, 1000);
            })
        }  */
    } 

    // hiding first two cards and reseting state
    if (clickedCards.length == 3) {
        for (i = 0; i <= 1; i++) {
            reset(clickedCards[i]);
        }
        // remove first 2 cards from the array
        clickedCards.splice(0, 2);
    }
    console.log(clickedCards);
}

// reset cards to use them again
function reset(chosenPair) {
    chosenPair.classList.add("card-back");
    // don't allow double click on card
    chosenPair.addEventListener("click", toggleCard); 
    chosenPair.removeAttribute("data-id");
}


