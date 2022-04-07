import './Styles/Main.css';
import { Routes, Route } from "react-router-dom";
import { FinalPage, GamePage, HomePage } from './Pages';
import GameProvider from './Contexts/GameContext';

function Router() {
  return (
    <GameProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </GameProvider>
  );
}

export default Router;
