import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import ColorSwitch from "./components/ColorSwitch";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header"
                  "info"
                  "user"
                  "computer"
                  "footer"`,
          lg: `"header header"
                "info info"
                "user computer"
                "footer footer"`,
        }}
        gridTemplateRows={{
          base: "80px 0.6fr 1fr 1fr 25px",
          lg: "150px 150px 1fr 50px",
        }}
        gridTemplateColumns={{ base: '"repeat(2, 1fr)"', lg: "repeat(2, 1fr)" }}
        minHeight="100vh"
        //maxWidth="1024px"
        //margin="0 auto"
      >
        <GridItem area={"header"} className="contentBox centered">
          <Header />
        </GridItem>
        <GridItem bg="gray" area={"info"} className="contentBox centered">
          Info
        </GridItem>
        <GridItem bg="orange" area={"user"} className="contentBox centered">
          user
        </GridItem>
        <GridItem bg="yellow" area={"computer"} className="contentBox centered">
          computer
        </GridItem>
        <GridItem bg="gray" area={"footer"} className="contentBox">
          <ColorSwitch />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
