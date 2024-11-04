
// import styled from 'styled-components';

import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

// const Button = styled.button`
// background-color: black;
// color: white;
// padding: 10px;
// `;
function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  }

  return (
    <>
     {/* <Button>This is styled </Button> */}
    {/* <StartGame />*/}


    {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}

    </>
  )
}

export default App;

// const Button = styled.button`
// background-color: black;
// color: white;
// padding: 10px;
// `;
