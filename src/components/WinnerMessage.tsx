import { Heading } from "@chakra-ui/react";
import "animate.css";

interface Props {
  currentWinner: number;
}

const WinnerMessage = ({ currentWinner }: Props) => {
  const winnerString =
    currentWinner === 1
      ? "YOU WON!"
      : currentWinner === -1
      ? "COMPUTER WON!"
      : currentWinner === 0
      ? "IT'S A DRAW."
      : "";

  return (
    <Heading className="animate__animated animate__fadeIn">
      {winnerString}
    </Heading>
  );
};

export default WinnerMessage;
