console.log("Hello");

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("1 for rock, 2 for paper, or 3 for scissors");

  if (choice === null) {
    return null;
  }

  if (choice === "1") return "rock";
  if (choice === "2") return "paper";
  if (choice === "3") return "scissors";

  console.log("Input not valid. Use 1, 2, or 3.");
  return null;
}

function playRound(humanChoice, computerChoice, scores) {
  if (!humanChoice) {
    console.log("Input dibatalkan!");
    return;
  }

  let human = humanChoice.toLowerCase();
  let computer = computerChoice.toLowerCase();

  if (human === computer) {
    console.log(`Draw! You both chose ${human}`);
    return;
  }

  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(`You win! ${human} beats ${computer}`);
    scores.human++;
  } else {
    console.log(`You lose! ${computer} beats ${human}`);
    scores.computer++;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const scores = {
    human: humanScore,
    computer: computerScore,
  };

  for (let index = 1; index <= 5; index++) {
    console.log(`---round ${index}---`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection, scores);
    console.log(`Score: human ${scores.human} & computer ${scores.computer}`);
  }

  console.log("=== Final Result ===");
  if (scores.human > scores.computer) {
    console.log("🎉 You win the game!");
  } else if (scores.human < scores.computer) {
    console.log("😢 You lose the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

playGame();
