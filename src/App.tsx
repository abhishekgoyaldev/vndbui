import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import GameDetails from "./components/GameDetails/GameDetails";
import SearchPage from "./components/SearchPage";
import routes from "tempo-routes";

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
