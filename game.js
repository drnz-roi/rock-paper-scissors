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

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${computerChoice}`);
    return;
  }

  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (beats[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
