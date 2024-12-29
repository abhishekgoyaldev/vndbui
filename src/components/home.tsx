import React, { useState } from "react";
import HeroSlider from "./HeroSlider";
import GameGrid from "./GameGrid/GameGrid";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section>
        <HeroSlider />
      </section>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <GameGrid />
      </main>
    </div>
  );
};

export default HomePage;
