function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  return randomChoice;
}

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return (`Tie! Both picked ${playerSelection}`);
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore++;
    return ("You Win! Rock beats Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore++;
    return ("You Win! Paper beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore++;
    return ("You Win! Scissors beats Paper");
  } else {
    computerScore++;
    return (`You Lose!! ${computerSelection} beats ${playerSelection}`);
  }

}

function game() {
  for (let i=0; i<5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Score: ${userScore}:${computerScore}`);
  }
  if (userScore > computerScore) {
    console.log(`You Win! Score: ${userScore}:${computerScore}`);
  } else if (userScore < computerScore) {
    console.log(`You Lose! Score: ${userScore}:${computerScore}`);
  } else {
    console.log(`You Tied! SCore: ${userScore}:${computerScore}`);
  }
}
game();



