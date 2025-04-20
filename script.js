
// || CREATE DOM CARDS

let gameBoard = document.querySelector(".game-board");

// create a card deck
let halfCardDeck = ["natsu", "erza", "frieren", "tiger", "bear", "flower"];
let cardDeck = halfCardDeck.concat(halfCardDeck);

cardDeck.forEach(makeNewCard);

// show cards on the board
function makeNewCard() {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    gameBoard.appendChild(newCard);
}

// || START GAME 

const gameBtn = document.querySelector(".new-game-btn");
const cards = document.querySelectorAll(".card");

// event: start button
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

// add shuffled pictures and dataset value (name of the picture)
function addPicture() {
    cards.forEach((card, index) => {
        let name = cardDeck[index];
        card.dataset.picture = name;
        card.style.backgroundImage = "url(./pictures/" + name + ".jpg)";
    });
}

// || MATCH PAIRS & FLIP CARDS

let pair = [];

cards.forEach((card) => {

    card.addEventListener("click", function() {
        
        let clickedCard = card.dataset.picture;

        if (!card.hasAttribute("data-id")) {
            pair.push(clickedCard);
            card.setAttribute("data-id", "just-clicked");
        }
        console.log(pair);

        if (pair.length == 2) {
            cards.forEach((picked) => {
                picked.removeAttribute("data-id");
            })
            
            if (pair[0] == pair[1]) {
                console.log("MATCH");
            }
            pair = [];
        }
    })
})



/*

/* function flipCard(event) {
    let pickedCard = event.target;
    pickedCard.classList.toggle("card-back");
}
 */

