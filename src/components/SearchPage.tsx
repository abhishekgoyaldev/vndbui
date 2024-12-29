import React, { useState } from "react";
import FilterBar from "./GameGrid/FilterBar";
import GameGrid from "./GameGrid/GameGrid";
import Navbar from "./Navbar";

const SearchPage = () => {
  const [sortBy, setSortBy] = useState("popularity");
  const [genre, setGenre] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Browse Visual Novels</h1>
        <FilterBar
          onSortChange={setSortBy}
          onGenreChange={setGenre}
          selectedSort={sortBy}
          selectedGenre={genre}
        />
        <GameGrid sortBy={sortBy} genre={genre} />
      </main>
    </div>
  );
};

export default SearchPage;
