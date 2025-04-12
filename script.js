let gameBoard = document.querySelector(".game-board");



let cardDeck = ["naruto", "erza", "frieren"];
cardDeck.forEach(makeNewCard)

function makeNewCard() {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    gameBoard.appendChild(newCard);
}
