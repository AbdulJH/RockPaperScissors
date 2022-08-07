function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  return randomChoice;
}
