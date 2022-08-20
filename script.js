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

function rpsClicks() {
  const textResults = document.querySelector('.result');

  //rock btn
  const rockButton = document.querySelector('.rock-btn');
rockButton.addEventListener('click', ()=> {
  textResults.textContent = playRound("rock", getComputerChoice());
  trackScores();
})
//paper btn
const paperButton = document.querySelector('.paper-btn');
paperButton.addEventListener('click', ()=> {
  textResults.textContent = playRound("rock", getComputerChoice());
  trackScores();
})
// scissors btn
const scissorsButton = document.querySelector('.scissors-btn');
scissorsButton.addEventListener('click', ()=> {
  textResults.textContent = playRound("rock", getComputerChoice());
  trackScores();
})
}

function trackScores() {
  const playerScore = document.querySelector('.player-score');
  playerScore.textContent = `PlayerScore: ${userScore}`;

  const computersScore = document.querySelector('.computer-score');
  computersScore.textContent = `ComputerScore: ${computerScore}`;
}



rpsClicks();





