import { Stack, Heading, Text } from "@chakra-ui/react";

const PlayerInfo = () => {
  return (
    <Stack>
      <Heading as="h3" size="lg">
        Player
      </Heading>
      <Text>Your score: 7</Text>
    </Stack>
  );
};

export default PlayerInfo;
