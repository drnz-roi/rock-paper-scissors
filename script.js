function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const roundLogEl = document.getElementById("round-log");
const buttons = document.querySelectorAll("#buttons button");

function playRound(playerSelection) {
  if (gameOver) return;

  const computerSelection = getComputerChoice();
  let roundMessage = "";

  if (playerSelection === computerSelection) {
    roundMessage = `Tie! Both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    roundMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  updateScore();
  logRound(roundMessage);
  checkForWinner();
}

function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function logRound(message) {
  const entry = document.createElement("p");
  entry.textContent = message;
  roundLogEl.prepend(entry);
}

function checkForWinner() {
  if (playerScore === 5) {
    resultEl.textContent = "🎉 You won the game!";
    endGame();
  } else if (computerScore === 5) {
    resultEl.textContent = "💻 Computer won the game!";
    endGame();
  }
}

function endGame() {
  gameOver = true;
  buttons.forEach(btn => btn.disabled = true);
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Play Again";
  resetBtn.id = "reset";
  resetBtn.addEventListener("click", resetGame);
  resultEl.appendChild(document.createElement("br"));
  resultEl.appendChild(resetBtn);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  updateScore();
  resultEl.textContent = "";
  roundLogEl.innerHTML = "";
  buttons.forEach(btn => btn.disabled = false);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
