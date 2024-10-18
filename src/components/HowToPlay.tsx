import {
  Button,
  List,
  ListItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaHandRock,
  FaHandPaper,
  FaHandScissors,
  FaHandLizard,
  FaHandSpock,
} from "react-icons/fa";
import sheldonImage from "../assets/sheldon.jpg";
import howToImage from "../assets/howtoplay.webp";
import SheldonExplanation from "./SheldonExplanation";

const HowToPlay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>How to play</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to play</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              borderRadius="full"
              boxSize="150px"
              src={sheldonImage}
              alt="Sheldon Cooper"
              float="right"
            />
            <List className="list-one-line">
              <ListItem>
                <FaHandScissors />
                Scissors cuts <FaHandPaper />
                Paper
              </ListItem>

              <ListItem>
                <FaHandPaper />
                Paper covers <FaHandRock />
                Rock
              </ListItem>

              <ListItem>
                <FaHandRock />
                Rock crushes <FaHandLizard />
                Lizard
              </ListItem>

              <ListItem>
                <FaHandLizard />
                Lizard poisons <FaHandSpock />
                Spock
              </ListItem>

              <ListItem>
                <FaHandSpock />
                Spock smashes <FaHandScissors />
                Scissors
              </ListItem>

              <ListItem>
                <FaHandScissors />
                Scissors decapitates <FaHandLizard />
                Lizard
              </ListItem>

              <ListItem>
                <FaHandLizard />
                Lizard eats <FaHandPaper />
                Paper
              </ListItem>

              <ListItem>
                <FaHandPaper />
                Paper disproves <FaHandSpock />
                Spock
              </ListItem>

              <ListItem>
                <FaHandSpock />
                Spock vaporizes <FaHandRock />
                Rock
              </ListItem>

              <ListItem>
                and as it always has...
                <br /> <FaHandRock />
                Rock crushes <FaHandScissors />
                Scissors
              </ListItem>
            </List>
            <Image src={howToImage} alt="How to play" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <SheldonExplanation />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HowToPlay;
