export interface DecisionResult {
  playerChoice: string;
  computerChoice: string;
  winner: number; // 1: User wins, -1: Computer wins, 0: Draw
}

export const decision = (playerChoice: string): DecisionResult => {
  // Computer random choice
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Variables
  let winner: number; //

  // Draw
  if (playerChoice === computerChoice) {
    winner = 0;
  }
  // Player wins
  else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    winner = 1;
    // Computer wins
  } else {
    winner = -1;
  }

  return { playerChoice, computerChoice, winner };
};
