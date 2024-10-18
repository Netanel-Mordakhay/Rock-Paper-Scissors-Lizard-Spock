import {
  Grid,
  GridItem,
  HStack,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./components/Header";
import FooterBar from "./components/FooterBar";
import OptionButton from "./components/OptionButton";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
import { rockPaperScissors, DecisionResult } from "./rockPaperScissors";
import Loading from "./components/Loading";
import WinnerMessage from "./components/WinnerMessage";
import confetti from "canvas-confetti";
import { Howl } from "howler";

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
  var winSound = new Howl({ src: ["./sounds/win.wav"] });
  var loseSound = new Howl({ src: ["./sounds/lose.mp3"] });
  //const winSound = new Audio("./sounds/win.wav");
  //const loseSound = new Audio("./sounds/lose.mp3");

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

      if (result.winner === 1) {
        winSound.play();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else if (result.winner === -1) {
        loseSound.play();
      }

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
          base: `"header"
                  "info"
                  "main"
                  "footer"`,
          lg: `"header"
                "info"
                "main"
                "footer"`,
        }}
        gridTemplateRows={{
          base: "50px 200px 1fr 50px",
          lg: "50px 120px 1fr 50px",
        }}
        gridTemplateColumns={{ base: '"1fr"', lg: "1fr" }}
        minHeight="100svh"
      >
        <GridItem bg={bgColor} area={"header"} className="contentBox centered">
          <Header />
        </GridItem>
        <GridItem area={"info"} className="contentBox centered">
          <OptionButton
            onSelectChoice={(choice) => handlePlayerChoice(choice)}
          />
        </GridItem>
        <GridItem area={"main"} className="centered">
          {isLoading ? (
            <Loading />
          ) : (
            <Stack className="centered">
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
              <WinnerMessage currentWinner={gameState.currentWinner} />
            </Stack>
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
