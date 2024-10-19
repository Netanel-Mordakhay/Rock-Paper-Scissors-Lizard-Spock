import { Card, CardBody, Image } from "@chakra-ui/react";
import defaultImage from "../assets/default.webp";
import paperImage from "../assets/paper.webp";
import rockImage from "../assets/rock.webp";
import scissorsImage from "../assets/scissors.webp";
import spockImage from "../assets/spock.webp";
import lizardImage from "../assets/lizard.webp";

interface Props {
  currentChoice: string;
}

const ChoiceCard = ({ currentChoice }: Props) => {
  // Key value pair for reading the correct image
  const images: { [key: string]: string } = {
    "": defaultImage,
    Rock: rockImage,
    Paper: paperImage,
    Scissors: scissorsImage,
    Lizard: lizardImage,
    Spock: spockImage,
  };

  const imageChoice = images[currentChoice];

  return (
    <Card
      width={{ base: "140px", lg: "300px" }}
      borderRadius={10}
      overflow="hidden"
    >
      <Image objectFit="fill" src={imageChoice} />
      <CardBody>{currentChoice || "No hand played yet"}</CardBody>
    </Card>
  );
};

export default ChoiceCard;
