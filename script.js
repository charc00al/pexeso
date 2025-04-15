
// DOM variables
let gameBoard = document.querySelector(".game-board");
let gameBtn = document.querySelector(".new-game-btn")

// creating card deck
let halfCardDeck = ["natsu", "erza", "frieren", "tiger", "bear", "flower"];
let cardDeck = halfCardDeck.concat(halfCardDeck);

cardDeck.forEach(makeNewCard)


gameBtn.addEventListener("click", function() {
    shuffleDeck();
});

// create cards on a board
function makeNewCard(name) {
    // create card element
    let newCard = document.createElement("div");

    // add class "card" and image
    newCard.classList.add("card");
    newCard.classList.add("card-front");
    newCard.style.backgroundImage = "url(./pictures/" + name + ".jpg)";

    // insert card into game board div
    gameBoard.appendChild(newCard);
}

// shuffle deck of cards
function shuffleDeck() {
    for (let i = cardDeck.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
    }
    console.log(cardDeck)
}
