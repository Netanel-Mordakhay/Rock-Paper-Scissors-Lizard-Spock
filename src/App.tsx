import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import FooterBar from "./components/FooterBar";
import OptionButton from "./components/OptionButton";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";

function App() {
  const bgColor = useColorModeValue("blue.50", "gray.700");

  interface GameState {
    playerScore: number;
    computerScore: number;
    playerChoice: string;
    computerChoice: string;
  }

  const [gameState, setGameState] = useState<GameState>({
    playerScore: 0,
    computerScore: 0,
    playerChoice: "",
    computerChoice: "",
  });

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
      >
        <GridItem bg={bgColor} area={"header"} className="contentBox centered">
          <Header />
        </GridItem>
        <GridItem area={"info"} className="contentBox centered">
          <OptionButton
            onSelectChoice={(choice) =>
              setGameState({ ...gameState, playerChoice: choice })
            }
          />
        </GridItem>
        <GridItem area={"user"} className="centered">
          <PlayerInfo
            currentChoice={gameState.playerChoice}
            currentScore={gameState.playerScore}
          />
        </GridItem>
        <GridItem area={"computer"} className="centered">
          <PlayerInfo
            currentChoice={gameState.playerChoice}
            currentScore={gameState.computerScore}
          />
        </GridItem>
        <GridItem bg={bgColor} area={"footer"} className="contentBox">
          <FooterBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
