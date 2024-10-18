import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import FooterBar from "./components/FooterBar";
import OptionButton from "./components/OptionButton";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
import { decision, DecisionResult } from "./Decision";

interface GameState {
  playerScore: number;
  computerScore: number;
  playerChoice: string;
  computerChoice: string;
}

function App() {
  const bgColor = useColorModeValue("blue.50", "gray.700");

  const [gameState, setGameState] = useState<GameState>({
    playerScore: 0,
    computerScore: 0,
    playerChoice: "",
    computerChoice: "",
  });

  const handlePlayerChoice = (playerChoice: string) => {
    const result: DecisionResult = decision(playerChoice);

    setGameState((prevGameState) => ({
      ...gameState,
      playerChoice: result.playerChoice,
      computerChoice: result.computerChoice,
      playerScore: prevGameState.playerScore + (result.winner === 1 ? 1 : 0),
      computerScore:
        prevGameState.computerScore + (result.winner === -1 ? 1 : 0),
    }));
  };

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
            onSelectChoice={(choice) => handlePlayerChoice(choice)}
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
            currentChoice={gameState.computerChoice}
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
