import Header from "./components/Header";
import Main from "./components/Main";
import GameContextProvider from "./context/game-context";

function App() {
  return (
    <GameContextProvider>
      <Header />
      <Main />
    </GameContextProvider>
  );
}

export default App;
