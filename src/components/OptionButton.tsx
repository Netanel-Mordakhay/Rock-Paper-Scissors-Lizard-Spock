import { Button, Text, Stack, HStack } from "@chakra-ui/react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const OptionButton = () => {
  return (
    <Stack>
      <Text>Please pick:</Text>
      <HStack>
        <Button leftIcon={<FaHandRock />}>Rock</Button>
        <Button leftIcon={<FaHandPaper />}>Paper</Button>
        <Button leftIcon={<FaHandScissors />}>Scissors</Button>
      </HStack>
    </Stack>
  );
};

export default OptionButton;
