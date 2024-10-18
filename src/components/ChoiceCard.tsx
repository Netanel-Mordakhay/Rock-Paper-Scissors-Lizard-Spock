import { Card, CardBody, Image } from "@chakra-ui/react";
import defaultImage from "../assets/default.jpg";
import paperImage from "../assets/paper.jpg";
import rockImage from "../assets/rock.jpg";
import scissorsImage from "../assets/scissors.jpg";
import spockImage from "../assets/spock.jpg";
import lizardImage from "../assets/lizard.jpg";

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
