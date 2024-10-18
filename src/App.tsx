import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

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
        <GridItem area={"header"} className="centered-content">
          <Header />
        </GridItem>
        <GridItem bg="gray" area={"info"} className="centered-content">
          Info
        </GridItem>
        <GridItem bg="orange" area={"user"} className="centered-content">
          user
        </GridItem>
        <GridItem bg="yellow" area={"computer"} className="centered-content">
          computer
        </GridItem>
        <GridItem bg="gray" area={"footer"} className="centered-content">
          footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
