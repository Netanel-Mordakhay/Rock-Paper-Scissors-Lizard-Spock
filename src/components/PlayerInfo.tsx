import { Stack, Heading, Text } from "@chakra-ui/react";
import ChoiceCard from "./ChoiceCard";

interface Props {
  currentChoice: string;
  currentScore: number;
}

const PlayerInfo = ({ currentChoice, currentScore }: Props) => {
  return (
    <Stack alignItems="center">
      <Heading as="h3" size="lg">
        Player
      </Heading>
      <ChoiceCard currentChoice={currentChoice} />
      <Text>Your score: {currentScore}</Text>
    </Stack>
  );
};

export default PlayerInfo;
