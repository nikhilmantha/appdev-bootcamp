const symbols = ['🍎', '🍌', '🍇', '🍓', '🍍', '🍉', '🍒', '🥝'];
let cards = [];
let firstCard = null, secondCard = null;
let lockBoard = false;

function initGame(easy) {
    let board = document.getElementById("game-board");
    board.innerHTML = "";
    
    cards.length = 0;
    if (easy) {
        for(let i = 0; i < 16; i++) {
            cards.push(createCard(symbols[5]));
        }
    } else {
        for (const symbol of symbols) {
            cards.push(createCard(symbol));
            cards.push(createCard(symbol));
        }
    }
    shuffleArray(cards);

    for (const card of cards) {
        board.appendChild(card);
    }

}

document.getElementById('restart-btn').addEventListener('click', () => initGame(false));
document.getElementById('easy-btn').addEventListener('click', () => initGame(true))

function createCard(symbol) {
    let card = document.createElement("div");
    card.setAttribute("data-symbol", symbol);
    card.classList.add("card");
    card.addEventListener("click", () => flipCard(card));
    return card;
}

function flipCard(card) {
    if (lockBoard || card === firstCard) return;

    card.classList.add("flipped")
    card.textContent = card.dataset.symbol;

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.symbol == secondCard.dataset.symbol) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    resetBoard();
}
 
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

initGame();
