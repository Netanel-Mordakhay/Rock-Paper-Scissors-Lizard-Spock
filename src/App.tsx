import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                        "user computer"
                        "footer footer"`}
        gridTemplateRows={"150px 1fr 50px"}
        gridTemplateColumns={"repeat(2, 1fr)"}
      >
        <GridItem bg="blue" area={"header"}>
          header
        </GridItem>
        <GridItem bg="orange" area={"user"}>
          user
        </GridItem>
        <GridItem bg="yellow" area={"computer"}>
          computer
        </GridItem>
        <GridItem bg="gray" area={"footer"}>
          footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
