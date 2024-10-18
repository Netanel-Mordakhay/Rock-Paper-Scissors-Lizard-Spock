import { Stack, Heading, Text } from "@chakra-ui/react";
import ChoiceCard from "./ChoiceCard";

const PlayerInfo = () => {
  return (
    <Stack alignItems="center">
      <Heading as="h3" size="lg">
        Player
      </Heading>
      <ChoiceCard />
      <Text>Your score: 7</Text>
    </Stack>
  );
};

export default PlayerInfo;
