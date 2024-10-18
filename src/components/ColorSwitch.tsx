import { Button, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Color mode: {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ColorSwitch;
