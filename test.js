
// || CREATE DOM CARDS

let gameBoard = document.querySelector(".game-board");

// create a card deck
let halfCardDeck = ["natsu", "erza", "frieren", "tiger", "bear", "flower"];
let cardDeck = halfCardDeck.concat(halfCardDeck);

cardDeck.forEach(makeNewCard);

// show cards on the board
function makeNewCard() {
    let newCard = document.createElement("div");
    newCard.classList.add("card", "card-back");
    gameBoard.appendChild(newCard);
}

// || START GAME 

const gameBtn = document.querySelector(".new-game-btn");
const cards = document.querySelectorAll(".card");

// event: start button
gameBtn.addEventListener("click", function() {
    shuffleDeck();
    addPicture();
    matchAndFlip();
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

// arr to store clicked cards
let clickedCards = [];

function matchAndFlip() {
    cards.forEach((card) => {
        card.addEventListener("click", function() {

            // toggle front and back side of the card
            card.classList.toggle("card-back");

            // label just clicked card, so double-click matching is impossible
            if (!card.hasAttribute("data-id")) {
                // save currently clicked card
                clickedCards.push(card);
                card.setAttribute("data-id", "just-clicked");
            }
    
            // if 2 cards are clicked ... 
            if (clickedCards.length == 2) {
                // clear all click-labeled cards, so player can use them again
                cards.forEach((clicked) => {
                    clicked.removeAttribute("data-id");
                })
    
                // name order of cards
                let firstPicture = clickedCards[0].dataset.picture;
                let secondPicture = clickedCards[1].dataset.picture;

                // .. check for match
                if (firstPicture == secondPicture) {
                    console.log("MATCH");
                    // hide matched cards
                    clickedCards.forEach((matched) => {
                        matched.style.visibility="hidden";
                    })
                }
                // clear arr
                clickedCards = [];
            }
        })
    })
}





