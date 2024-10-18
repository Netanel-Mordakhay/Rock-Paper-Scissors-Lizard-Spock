import { HStack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ColorSwitch from "./ColorSwitch";

const FooterBar = () => {
  return (
    <HStack width="100%" justifyContent="space-between">
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

        <Text as="i" color="gray.500">
          Netanel Mordakhay
        </Text>
      </HStack>
      <ColorSwitch />
    </HStack>
  );
};

export default FooterBar;
