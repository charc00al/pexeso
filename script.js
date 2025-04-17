
// DOM variables
let gameBoard = document.querySelector(".game-board");
let gameBtn = document.querySelector(".new-game-btn")


// || CREATE DOM CARDS

// creating card deck
let halfCardDeck = ["natsu", "erza", "frieren", "tiger", "bear", "flower"];
let cardDeck = halfCardDeck.concat(halfCardDeck);

cardDeck.forEach(makeNewCard);

// show cards on a board
function makeNewCard() {
    let newCard = document.createElement("div");
    newCard.classList.add("card", "card-back", "card-front")
    gameBoard.appendChild(newCard);
}

// shuffle deck of cards
function shuffleDeck() {
    for (let i = cardDeck.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
    }
}

// || START GAME 

const cardsFront = document.querySelectorAll(".card-front");

// start button
gameBtn.addEventListener("click", function() {
    shuffleDeck();
    addPicture();
});

// add shuffled pictures and datatype
function addPicture() {
    cardsFront.forEach((card, index) => {
        let name = cardDeck[index];
        card.dataset.picture = name;
        card.style.backgroundImage = "url(./pictures/" + name + ".jpg)";
    });
}
