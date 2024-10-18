import { Button, Text, Stack, HStack } from "@chakra-ui/react";
import {
  FaHandRock,
  FaHandPaper,
  FaHandScissors,
  FaHandLizard,
  FaHandSpock,
} from "react-icons/fa";

interface Props {
  onSelectChoice: (choice: string) => void;
  currentWinner: number;
}

const OptionButton = ({ onSelectChoice, currentWinner }: Props) => {
  const winnerString =
    currentWinner === 1
      ? "YOU WIN!"
      : currentWinner === -1
      ? "COMPUTER WINS!"
      : currentWinner === 0
      ? "IT'S A DRAW."
      : "";

  return (
    <Stack>
      <Text>Please pick:</Text>
      <HStack>
        <Button
          leftIcon={<FaHandRock />}
          onClick={() => onSelectChoice("Rock")}
        >
          Rock
        </Button>
        <Button
          leftIcon={<FaHandPaper />}
          onClick={() => onSelectChoice("Paper")}
        >
          Paper
        </Button>
        <Button
          leftIcon={<FaHandScissors />}
          onClick={() => onSelectChoice("Scissors")}
        >
          Scissors
        </Button>
        <Button
          leftIcon={<FaHandLizard />}
          onClick={() => onSelectChoice("Lizard")}
        >
          Lizard
        </Button>
        <Button
          leftIcon={<FaHandSpock />}
          onClick={() => onSelectChoice("Spock")}
        >
          Spock
        </Button>
      </HStack>
      <Text>And the winner is... {winnerString}</Text>
    </Stack>
  );
};

export default OptionButton;
