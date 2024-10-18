import { Spinner, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text>Let's see who won...</Text>
    </>
  );
};

export default Loading;
