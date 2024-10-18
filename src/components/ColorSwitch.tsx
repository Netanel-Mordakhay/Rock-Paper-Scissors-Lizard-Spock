import { Button, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Dark" : "Light"} mode
    </Button>
  );
};

export default ColorSwitch;
