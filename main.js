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
        const playerSelection = "rock";

        playRound(playerSelection, computerSelection);
        score(playerScore, computerScore);
        scoreCheck(playerScore, computerScore);
    }
});
paperBtn.addEventListener("click", () => {
    // eslint-disable-next-line no-shadow
    if (playerScore < 5 && computerScore < 5) {
        const playerSelection = "paper";

        playRound(playerSelection, computerSelection);
        score(playerScore, computerScore);
        scoreCheck(playerScore, computerScore);
    }
});
scissorsBtn.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        const playerSelection = "scissors";

        playRound(playerSelection, computerSelection);
        score(playerScore, computerScore);
        scoreCheck(playerScore, computerScore);
    }
});

// results functions
const p = document.createElement("p");
function wining(playerSelection) {
    p.innerText = `  you win you choose ${playerSelection}`;
    outData.appendChild(p);
    ++playerScore;
}
function losing(playerSelection) {
    p.innerText = `you lose u choose ${playerSelection}`;
    outData.appendChild(p);
    ++computerScore;
}
function draw() {
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
        wining(playerSelection);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        losing(playerSelection);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        wining(playerSelection);
    } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
    ) {
        losing(playerSelection);
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        wining(playerSelection);
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

// play again button
function playAgain() {
    const btn = document.createElement("button");
    btn.innerText = "play again";
    btn.classList.add("btn");
    outData.appendChild(btn);
    btn.addEventListener("click", () => {
        window.location.reload();
    });
}

// to check the score
const h2 = document.createElement("h2");
function scoreCheck(playerScore, computerScore) {
    if (playerScore === 5) {
        h2.innerText = `you  beat the computer ${playerScore} vs ${computerScore} `;
        outData.appendChild(h2);
        playAgain();
    } else if (computerScore === 5) {
        h2.innerText = `you  lose  the computer win ${playerScore} vs ${computerScore} `;
        outData.appendChild(h2);
        playAgain();
    }
}
