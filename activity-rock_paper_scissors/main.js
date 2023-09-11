//buttons
const rockBtn = document.getElementById("btn-rock");
const paperBtn = document.getElementById("btn-paper");
const scissorsBtn = document.getElementById("btn-scissors");

const playerScoreLabel = document.getElementById("player-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");

const playerTurnLabel = document.getElementById("player-turn-label");
const computerTurnLabel = document.getElementById("computer-turn-label");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerWeapon, computerWeapon) {
  if (playerWeapon === computerWeapon) {
    return "Tie";
  } else if (
    (playerWeapon === "rock" && computerWeapon === "scissors") ||
    (playerWeapon === "paper" && computerWeapon === "rock") ||
    (playerWeapon === "scissors" && computerWeapon === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
}

function getComputerWeapon() {
  const weapons = ["rock", "paper", "scissors"];
  const randomWeapon = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomWeapon];
}

// console.log(getComputerWeapon());

function gameHandler(playerWeapon) {
  const computerSelection = getComputerWeapon();
  const playerSelection = playerWeapon.toLowerCase();

  playerTurnLabel.textContent = playerSelection;
  computerTurnLabel.textContent = computerSelection;

  const result = playRound(playerSelection, computerSelection);

  if (result === "You win") {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
  } else if (result === "You lose") {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    tieScore++;
    tieScoreLabel.textContent = tieScore;
  }
  console.log(result);
}
rockBtn.addEventListener("click", () => gameHandler(rockBtn.textContent));
paperBtn.addEventListener("click", () => gameHandler(paperBtn.textContent));
scissorsBtn.addEventListener("click", () =>
  gameHandler(scissorsBtn.textContent)
);
