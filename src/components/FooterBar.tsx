import { HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ColorSwitch from "./ColorSwitch";
import HowToPlay from "./HowToPlay";

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
      </HStack>
      <HStack>
        <HowToPlay />
        <ColorSwitch />
      </HStack>
    </HStack>
  );
};

export default FooterBar;
