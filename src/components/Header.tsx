import { Heading, HStack } from "@chakra-ui/react";
import { FaHandScissors } from "react-icons/fa";
import "animate.css";

const Header = () => {
  return (
    <HStack className="header-container animate__animated animate__fadeInDown">
      <FaHandScissors className="logo-icon" />
      <Heading as="h1" size="xl">
        Rock Paper Scissors
      </Heading>
    </HStack>
  );
};

export default Header;
