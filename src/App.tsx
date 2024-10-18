import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import FooterBar from "./components/FooterBar";

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
          base: "80px 0.6fr 1fr 1fr 60px",
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
        <GridItem area={"info"} className="contentBox centered">
          Info
        </GridItem>
        <GridItem area={"user"} className="contentBox centered">
          user
        </GridItem>
        <GridItem area={"computer"} className="contentBox centered">
          computer
        </GridItem>
        <GridItem area={"footer"} className="contentBox">
          <FooterBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
