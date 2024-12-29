import React from "react";
import GameCard from "./GameCard";

interface Game {
  id: string;
  coverArt: string;
  title: string;
  releaseDate: string;
  rating: number;
  engine: string;
  version: string;
  genre: string;
}

interface GameGridProps {
  sortBy?: string;
  genre?: string;
}

const mockGames: Game[] = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 1}`,
  coverArt: `https://picsum.photos/800/340?random=${i}`,
  title: `Visual Novel ${i + 1}`,
  releaseDate: new Date(
    2024,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1,
  ).toISOString(),
  engine: Math.random() > 0.5 ? "RenPy" : "Unity",
  version: `${Math.floor(Math.random() * 2)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`,
  rating: Math.round((3 + Math.random() * 2) * 10) / 10,
  genre: ["romance", "mystery", "fantasy", "scifi", "horror"][
    Math.floor(Math.random() * 5)
  ],
}));

const GameGrid = ({ sortBy = "popularity", genre = "all" }: GameGridProps) => {
  // Filter and sort games
  const filteredAndSortedGames = mockGames
    .filter((game) => {
      if (genre === "all") return true;
      return game.genre === genre;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "releaseDate":
          return (
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
          );
        case "rating":
          return b.rating - a.rating;
        case "popularity":
        default:
          return parseInt(a.id) - parseInt(b.id);
      }
    });

  return (
    <div className="w-full bg-background p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAndSortedGames.map((game) => (
          <GameCard
            key={game.id}
            coverArt={game.coverArt}
            title={game.title}
            releaseDate={game.releaseDate}
            rating={game.rating}
            engine={game.engine}
            version={game.version}
            id={game.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
