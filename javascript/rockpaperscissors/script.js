let score = 0
let choiceNumbers = [0,1,2]
let gameChoices = ["Rock", "Paper", "Scissors"]

function botChoice() {
    let botChoiceNumber = Math.floor(Math.random() * 3);
    let botGameChoice = gameChoices[botChoiceNumber]

    let botDiv = document.getElementById("bot-chose")
    botDiv.innerText = `Bot Chose: ${botGameChoice}`

    return botChoiceNumber;
}

function userChoose(userChoiceNumber) {
    let botChoiceNumber =  botChoice();
    let youChoseDiv = document.getElementById("you-chose")
    youChoseDiv.innerText = `You Chose: ${gameChoices[userChoiceNumber]}`

    let result = ""
    if(userChoiceNumber == (botChoiceNumber + 1) % 3) {
        result = "YOU WON"
        score++;
    } else if(botChoiceNumber == (userChoiceNumber + 1) %3) {
        result = "YOU LOST"
    } else {
        result = "WE TIED"
    }

    let resultDiv = document.getElementById("game-result")
    let scoreDiv = document.getElementById("score-counter")

    resultDiv.innerText = result
    scoreDiv.innerText = `Score: ${score}`
}

let rockButton = document.getElementById("rock-button")
let paperButton = document.getElementById("paper-button")
let scissorButton = document.getElementById("scissor-button")

rockButton.addEventListener("click", () => userChoose(0))
paperButton.addEventListener("click", () => userChoose(1))
scissorButton.addEventListener("click", () => userChoose(2))