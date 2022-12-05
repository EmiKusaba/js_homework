let playerScore = 0;
let computerScore = 0;

function getPlayerSelection() {
  let userInput = prompt("Player: Rock, Paper or Scissors?").toLowerCase().trim();
  if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
    console.log("You chose " + `${userInput}.`)
  } else {
    console.log("Error! Try again!")
  }
  return userInput
}

function getComputerSelection() {
  let choices = ["rock", "paper", "scissors"]
  let selection = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer chose ${selection}.`)
  return selection
}

function playRound() {
  let playerSelection = getPlayerSelection()
  let computerSelection = getComputerSelection();

  let winner = null

  if (playerSelection !== computerSelection) {
    if (playerSelection === "rock") {
      winner = computerSelection === "paper" ? "Computer" : "Player"
    }
    else if (playerSelection === "paper") {
      winner = computerSelection === "scissors" ? "Computer" : "Player"
    }
    else {
      winner = computerSelection === "rock" ? "Computer" : "Player"
    }
  }

  let msg = winner === null ? "It's a tie this round!" : `${winner} wins this round!`
  console.log(msg)

  if (winner === "Player") {
    playerScore += 1
  }
  else if (winner === "Computer") {
    computerScore += 1
  }
  else {
    playerScore += 1
    computerScore += 1
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`**** ROUND ${i + 1} ****`)
    playRound();
    console.log(`Player score: ${playerScore}, computer score: ${computerScore}.`)
  }

  console.log("************************")

  let msg = "Game over. "

  if (playerScore == computerScore) {
    msg += "It's a draw!"
  } else {
    msg += playerScore < computerScore ? "Computer won!" : "Player won!"
  }

  console.log(msg)
}

game()



