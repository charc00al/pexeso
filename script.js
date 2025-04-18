
// || CREATE DOM CARDS

let gameBoard = document.querySelector(".game-board");

// create a card deck
let halfCardDeck = ["natsu", "erza", "frieren", "tiger", "bear", "flower"];
let cardDeck = halfCardDeck.concat(halfCardDeck);

cardDeck.forEach(makeNewCard);

// show cards on the board
function makeNewCard() {
    let newCard = document.createElement("div");
    newCard.classList.add("card", "card-back", "card-front")
    gameBoard.appendChild(newCard);
}

// || START GAME 

const gameBtn = document.querySelector(".new-game-btn");
const cardsFront = document.querySelectorAll(".card-front");

// start button
gameBtn.addEventListener("click", function() {
    shuffleDeck();
    addPicture();
});

// shuffle deck of cards
function shuffleDeck() {
    for (let i = cardDeck.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
    }
}

// add shuffled pictures and dataset
function addPicture() {
    cardsFront.forEach((cardFront, index) => {
        let name = cardDeck[index];
        cardFront.dataset.picture = name;
        cardFront.style.backgroundImage = "url(./pictures/" + name + ".jpg)";
    });
}

// MATCH PAIRS

const cards = document.querySelectorAll(".card");
let pair = [];

gameBoard.addEventListener("click", function(event) {
    let clickedCard = event.target.dataset.picture;
    if (event.target.matches(".card")) {
        pair.push(clickedCard);
    }

    if (pair.length == 2) {
        console.log(pair);
        if (pair[0] == pair[1]) {
            console.log("MATCH");
        }
        pair = [];
    }
});


