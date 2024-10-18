import { Stack, Heading, Text } from "@chakra-ui/react";
import ChoiceCard from "./ChoiceCard";

interface Props {
  title: string;
  currentChoice: string;
  currentScore: number;
}

const PlayerInfo = ({ title, currentChoice, currentScore }: Props) => {
  return (
    <Stack
      alignItems="center"
      marginX={{ base: "2", lg: "10" }}
      className="scale-animation animate__animated animate__bounceIn"
    >
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <ChoiceCard currentChoice={currentChoice} />
      <Text>Current score: {currentScore}</Text>
    </Stack>
  );
};

export default PlayerInfo;
