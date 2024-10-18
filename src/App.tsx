import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import FooterBar from "./components/FooterBar";
import OptionButton from "./components/OptionButton";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
import { decision, DecisionResult } from "./Decision";

// GameState interface holding information regarding each round
interface GameState {
  playerScore: number;
  computerScore: number;
  playerChoice: string;
  computerChoice: string;
  currentWinner: number;
}

function App() {
  // different background colors useing the color mode hook
  const bgColor = useColorModeValue("blue.50", "gray.700");

  // useState hook for controlling the GameState for each round
  const [gameState, setGameState] = useState<GameState>({
    playerScore: 0,
    computerScore: 0,
    playerChoice: "",
    computerChoice: "",
    currentWinner: -2, // Default value with no meaning showing no current winner
  });

  // Handling player choice using Decision function
  const handlePlayerChoice = (playerChoice: string) => {
    const result: DecisionResult = decision(playerChoice);

    // Updating the GameState
    setGameState((prevGameState) => ({
      ...gameState,
      playerChoice: result.playerChoice,
      computerChoice: result.computerChoice,
      playerScore: prevGameState.playerScore + (result.winner === 1 ? 1 : 0),
      computerScore:
        prevGameState.computerScore + (result.winner === -1 ? 1 : 0),
      currentWinner: result.winner,
    }));
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header header"
                  "info info"
                  "user computer"
                  "footer footer"`,
          lg: `"header header"
                "info info"
                "user computer"
                "footer footer"`,
        }}
        gridTemplateRows={{
          base: "80px 0.6fr 1fr 60px",
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
            currentWinner={gameState.currentWinner}
            onSelectChoice={(choice) => handlePlayerChoice(choice)}
          />
        </GridItem>
        <GridItem area={"user"} className="centered">
          <PlayerInfo
            title="Player"
            currentChoice={gameState.playerChoice}
            currentScore={gameState.playerScore}
          />
        </GridItem>
        <GridItem area={"computer"} className="centered">
          <PlayerInfo
            title="Computer"
            currentChoice={gameState.computerChoice}
            currentScore={gameState.computerScore}
          />
        </GridItem>
        <GridItem area={"footer"} className="contentBox">
          <FooterBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
