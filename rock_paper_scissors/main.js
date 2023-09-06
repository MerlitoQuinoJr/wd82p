// Plan
// Console game
// computer choice -> weapon of choice
// human input -> weapon of choice
// process
//output -> winner
// pseudocode
// 1. Get input of human player using prompt method
// 2. Store the human input in a variable
// 3. Get the weapon of computer
// 4. Create a function that generates random weapon of choice for computer -> "rock", "paper", "scissors"
// 5. Store the computer weapon in a variable
// 6. Create a function that takes two parameters,
// 7. Process the weapons to find out the results

function getComputerSelection() {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));

  return weapons[randomIndex];
}

const playerSelection = prompt("Select a Weapon!");
const computerSelection = getComputerSelection();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && getComputerSelection === "scissors") ||
    (playerSelection === "paper" && getComputerSelection === "rock") ||
    (playerSelection === "scissors" && getComputerSelection === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 1; i <= 3; i++) {
    const playerSelection = prompt("Select a Weapon!");
    const computerSelection = getComputerSelection();

    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
