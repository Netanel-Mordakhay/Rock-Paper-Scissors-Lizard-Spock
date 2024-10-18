import { Stack, Heading, Text } from "@chakra-ui/react";
import ChoiceCard from "./ChoiceCard";

interface Props {
  title: string;
  currentChoice: string;
  currentScore: number;
}

const PlayerInfo = ({ title, currentChoice, currentScore }: Props) => {
  return (
    <Stack alignItems="center" marginX={10}>
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <ChoiceCard currentChoice={currentChoice} />
      <Text>Your score: {currentScore}</Text>
    </Stack>
  );
};

export default PlayerInfo;
