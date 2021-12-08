let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.querySelector("#player-el");

playerEl.textContent = `${player.name}: $${player.chips}`

function getRandomCard() {
    cardDrawn = Math.floor(Math.random() * 13) + 1;
    if (cardDrawn === 1) {
        cardDrawn = 11;
    } else if (cardDrawn > 10) {
        cardDrawn = 10;
    }
    return cardDrawn;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21 && sum === 31) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackjack = true;
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false;
    }
    document.querySelector("#message-el").textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: `;
    for ( let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += `${cards[i]} `
    }
    
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
        console.log("Drawing new card from the deck");
    }
}
