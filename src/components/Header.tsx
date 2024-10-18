import { Heading, HStack } from "@chakra-ui/react";
import { FaHandSpock } from "react-icons/fa";
import "animate.css";

const Header = () => {
  return (
    <HStack className="header-container animate__animated animate__fadeInDown">
      <FaHandSpock className="logo-icon" />
      <Heading as="h1" size="md">
        Rock Paper Scissors Lizard Spock
      </Heading>
    </HStack>
  );
};

export default Header;
