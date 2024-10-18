import { Grid, GridItem, HStack, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import FooterBar from "./components/FooterBar";
import OptionButton from "./components/OptionButton";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
import { rockPaperScissors, DecisionResult } from "./rockPaperScissors";
import Loading from "./components/Loading";

// GameState interface holding information regarding each round
interface GameState {
  playerScore: number;
  computerScore: number;
  playerChoice: string;
  computerChoice: string;
  currentWinner: number;
}

function App() {
  const [isLoading, setLoading] = useState(false);
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
    // Set loading time
    setLoading(true);

    setTimeout(() => {
      const result: DecisionResult = rockPaperScissors(playerChoice);

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
      // Set loading state to false once results are updated
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header header"
                  "info info"
                  "main main"
                  "footer footer"`,
          lg: `"header header"
                "info info"
                "main main"
                "footer footer"`,
        }}
        gridTemplateRows={{
          base: "repeat(4, auto)",
          lg: "50px 120px 1fr 50px",
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
        <GridItem area={"main"} className="centered">
          {isLoading ? (
            <Loading />
          ) : (
            <HStack className="centered">
              <PlayerInfo
                title="Player"
                currentChoice={gameState.playerChoice}
                currentScore={gameState.playerScore}
              />
              <PlayerInfo
                title="Computer"
                currentChoice={gameState.computerChoice}
                currentScore={gameState.computerScore}
              />
            </HStack>
          )}
        </GridItem>

        <GridItem area={"footer"} className="contentBox">
          <FooterBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
