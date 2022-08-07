function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return (`Tie! Both have picked ${playerSelection}`);
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return ("You Win! Rock beats Scissors");
  } else if (playerSelection === "rock" && computerSelection !== "scissors"){
    return (`You Lose! ${computerSelection} beats ${playerSelection}`);
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    return ("You Win! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection !== "rock"){
    return (`You Lose! ${computerSelection} beats ${playerSelection}`);
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    return ("You Win! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection !== "paper"){
    return (`You Lose! ${computerSelection} beats ${playerSelection}`);
  }

}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();



