/* eslint-disable no-undef */
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const outData = document.querySelector(".outdata");
let playerScore = 0;
let computerScore = 0;

// computer choice
function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    const random = rps[Math.floor(Math.random() * rps.length)];

    return random;
}
// events listeners  ||   player choice
const computerSelection = computerPlay();
rockBtn.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        const computerSelection = computerPlay();
        const playerSelection = "rock";

        playRound(playerSelection, computerSelection);
        score(playerScore, computerScore);
        scoreCheck(playerScore, computerScore);
    }
});
paperBtn.addEventListener("click", () => {
    // eslint-disable-next-line no-shadow
    if (playerScore < 5 && computerScore < 5) {
        const computerSelection = computerPlay();
        const playerSelection = "paper";

        playRound(playerSelection, computerSelection);
        score(playerScore, computerScore);
        scoreCheck(playerScore, computerScore);
    }
});
scissorsBtn.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        const computerSelection = computerPlay();
        const playerSelection = "scissors";

        playRound(playerSelection, computerSelection);
        score(playerScore, computerScore);
        scoreCheck(playerScore, computerScore);
    }
});

// results functions
function winnig(playerSelection) {
    const p = document.createElement("p");
    p.innerText = `  you win you choose ${playerSelection}`;
    outData.appendChild(p);
    ++playerScore;
}
function losing(playerSelection) {
    const p = document.createElement("p");
    p.innerText = `you lose u choose ${playerSelection}`;
    outData.appendChild(p);
    ++computerScore;
}
function draw() {
    const p = document.createElement("p");
    p.innerText = "it's a draw";
    outData.appendChild(p);
}
//
//
// playground fucntion
const playRound = function (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draw(playerSelection);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        winnig(playerSelection);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        losing(playerSelection);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winnig(playerSelection);
    } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
    ) {
        losing(playerSelection);
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        winnig(playerSelection);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        losing(playerSelection);
    }
};

const sp = document.querySelector(".splayer");
const sc = document.querySelector(".scomput");
function score(playerScore, computerScore) {
    sp.innerText = ` player score: ${playerScore}`;
    sc.innerText = `computer score: ${computerScore}`;
}
// to check the score
function scoreCheck(playerScore, computerScore) {
    if (playerScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = `you  beat the computer ${playerScore} vs ${computerScore} `;
        outData.appendChild(h2);
    } else if (computerScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = `you  lose  the computer win ${playerScore} vs ${computerScore} `;
        outData.appendChild(h2);
    }
}
