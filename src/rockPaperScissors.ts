// Decision result interface
export interface DecisionResult {
  playerChoice: string;
  computerChoice: string;
  winner: number; // 1: User wins, -1: Computer wins, 0: Draw
}

// Rock paper scissors lizard spock logic
export const rockPaperScissors = (playerChoice: string): DecisionResult => {
  // Computer random choice
  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Variables
  let winner: number; //

  // Draw situation
  if (playerChoice === computerChoice) {
    winner = 0;
  }
  // Player wins
  else if (
    (playerChoice === "Rock" &&
      (computerChoice === "Scissors" || computerChoice === "Lizard")) ||
    (playerChoice === "Paper" &&
      (computerChoice === "Rock" || computerChoice === "Spock")) ||
    (playerChoice === "Scissors" &&
      (computerChoice === "Paper" || computerChoice === "Lizard")) ||
    (playerChoice === "Lizard" &&
      (computerChoice === "Paper" || computerChoice === "Spock")) ||
    (playerChoice === "Spock" &&
      (computerChoice === "Rock" || computerChoice === "Scissors"))
  ) {
    winner = 1;
    // Computer wins
  } else {
    winner = -1;
  }

  return { playerChoice, computerChoice, winner };
};
