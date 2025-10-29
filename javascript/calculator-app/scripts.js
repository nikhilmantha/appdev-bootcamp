function outputAnswer() {
    let firstNumber = Number(document.getElementById("first-number").value);
    let secondNumber = Number(document.getElementById("second-number").value);
    let operatorChoice = document.getElementById("select-operator").value;

    let operatorMap = {
        "plus": (x, y) => x + y,
        "minus": (x, y) => x - y,
        "multiply": (x, y) => x * y,
        "divide": (x, y) => x / y
    }

    let answer = operatorMap[operatorChoice](firstNumber, secondNumber);
    let response = document.getElementById("response");
    response.innerText = `Answer: ${answer}`;
}

let button = document.getElementById("submit");
button.addEventListener("click", () => outputAnswer());
