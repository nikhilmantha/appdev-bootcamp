let score = 0


function addScore() {
    score++;
    let h1 = document.getElementById("score")
    h1.innerText = `Score: ${score}`
};

let button = document.querySelector("#add")
button.addEventListener("click", addScore);



