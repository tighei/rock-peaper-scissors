const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const out_data = document.querySelector(".outdata");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    const random = rps[Math.floor(Math.random() * rps.length)];

    return random;
}

const computerSelection = computerPlay();
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement("p");
        p.innerText = `draw you both choose  ${playerSelection}`;
        out_data.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        const p = document.createElement("p");
        p.innerText = `you win you choose ${playerSelection} `;
        out_data.appendChild(p);
        ++playerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        const p = document.createElement("p");
        p.innerText = `you lose u choose ${playerSelection}`;
        out_data.appendChild(p);
        ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        const p = document.createElement("p");
        p.innerText = ` you  win you choose ${playerSelection}`;
        out_data.appendChild(p);
        ++playerScore;
    } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
    ) {
        const p = document.createElement("p");
        p.innerText = `you lose u choose ${playerSelection}`;
        out_data.appendChild(p);
        ++computerScore;
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        const p = document.createElement("p");
        p.innerText = `  you win you choose ${playerSelection}`;
        out_data.appendChild(p);
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        const p = document.createElement("p");
        p.innerText = `you lose u choose ${playerSelection}`;
        out_data.appendChild(p);
        ++computerScore;
    }
    console.log(
        "1",
        playerSelection,
        "2",
        computerSelection,
        playerScore,
        computerScore
    );
};
//
const sp = document.querySelector(".sp");
const sc = document.querySelector(".sc");
function score(playerScore, computerScore) {
    sp.innerText = ` player score: ${playerScore}`;
    sc.innerText = `computer score: ${computerScore}`;
}

//
function foris(playerScore, computerScore) {
    if (playerScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = `you  beat the computer ${playerScore}vs ${computerScore} `;
        out_data.appendChild(h2);
    } else if (computerScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = `you  lose  the computer win ${playerScore}vs ${computerScore} `;
        out_data.appendChild(h2);
    }
}
//
rockBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "rock";

    playRound(playerSelection, computerSelection);
    score(playerScore, computerScore);
    foris(playerScore, computerScore);
});
paperBtn.addEventListener("click", () => {
    // eslint-disable-next-line no-shadow
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    score(playerScore, computerScore);
    foris(playerScore, computerScore);
});
scissorsBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    score(playerScore, computerScore);
    foris(playerScore, computerScore);
});
//
//
//
