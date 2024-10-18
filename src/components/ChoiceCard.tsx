import { Card, CardBody, Image } from "@chakra-ui/react";
import paperImage from "../assets/paper.jpg";
//import rockImage from "../assets/rock.jpg";
//import scissorsImage from "../assets/scissors.jpg";

const ChoiceCard = () => {
  return (
    <Card
      maxW={{ base: "140px", lg: "300px" }}
      //maxH={{ base: "200px", lg: "300px" }}
      borderRadius={10}
      overflow="hidden"
    >
      <Image src={paperImage} />
      <CardBody>Paper</CardBody>
    </Card>
  );
};

export default ChoiceCard;
