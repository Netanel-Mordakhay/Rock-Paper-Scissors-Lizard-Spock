import { HStack, Show, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ColorSwitch from "./ColorSwitch";
import HowToPlay from "./HowToPlay";

const FooterBar = () => {
  return (
    <HStack width="100%" justifyContent="space-between" color="gray.500">
      <HStack>
        <a
          href="https://github.com/Netanel-Mordakhay"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub className="social-icon left-rotate" />
        </a>
        <a
          href="https://linkedin.com/in/netanel-mordakhay/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          <FaLinkedin className="social-icon left-rotate" />
        </a>
        <Show above="lg">
          <Text as="i">Netanel Mordakhay</Text>
        </Show>
      </HStack>
      <HStack>
        <HowToPlay />
        <ColorSwitch />
      </HStack>
    </HStack>
  );
};

export default FooterBar;
