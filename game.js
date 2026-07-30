function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const buttonsDiv = document.querySelector("#buttons");

function playRound(humanChoice, computerChoice) {
  let roundMessage;

  if (humanChoice === computerChoice) {
    roundMessage = `It's a tie! Both chose ${computerChoice}`;
  } else {
    const beats = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    if (beats[humanChoice] === computerChoice) {
      humanScore++;
      roundMessage = `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      roundMessage = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  resultsDiv.textContent = roundMessage;
  scoreDiv.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

  checkForWinner();
}

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    resultsDiv.textContent = winner;
    buttonsDiv.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  }
}

function handleClick(event) {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

buttonsDiv.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleClick);
});
