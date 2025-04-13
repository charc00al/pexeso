
// DOM variables
let gameBoard = document.querySelector(".game-board");

// creating card deck
let cardDeck = ["natsu", "erza", "frieren", "tiger", "bear", "flower"];
cardDeck.forEach(makeNewCard)

function makeNewCard(name) {
    // create card element
    let newCard = document.createElement("div");

    // add class "card" and image
    newCard.classList.add("card");
    newCard.style.backgroundImage = "url(./pictures/" + name + ".jpg)";

    // add data attribute
    newCard.dataset.cardPicture = name;

    // insert card into game board div
    gameBoard.appendChild(newCard);
    console.log(name);
}
