import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Share2, Calendar, Tag, Clock } from "lucide-react";
import Navbar from "../Navbar";

interface GameDetails {
  id: string;
  title: string;
  coverArt: string;
  description: string;
  releaseDate: string;
  developer: string;
  rating: number;
  genre: string;
  playtime: string;
}

const mockGame: GameDetails = {
  id: "1",
  title: "Adventures of a Rookie Superhero",
  coverArt:
    "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=1512&h=400&fit=crop",
  description:
    "Follow Nightwraith, a scrappy and snappy redhead ready to make a name for herself, as she fights crime and seeks to take down the evil Red Sirens gang that plagues her city! Currently, this game is in VERY EARLY DEVELOPMENT! Don't expect a bundle of content just yet! Please test it out and let me know what you'd like to see more of/changed!",
  releaseDate: "2024-12-29",
  developer: "Sneaky Games",
  rating: 4.5,
  genre: "Action",
  playtime: "2-3 hours",
};

const GameDetails = () => {
  const { id } = useParams();
  // In a real app, we would fetch the game details using the id
  const game = mockGame;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        {/* Hero Image */}
        <div className="w-full h-[400px] relative">
          <img
            src={game.coverArt}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Game Info */}
        <div className="container mx-auto px-4 relative -mt-32">
          <div className="bg-card rounded-lg shadow-lg p-6 border">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge className="bg-primary/80">
                    <Star className="w-4 h-4 mr-1" />
                    {game.rating.toFixed(1)}
                  </Badge>
                  <Badge variant="outline">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(game.releaseDate).toLocaleDateString()}
                  </Badge>
                  <Badge variant="outline">
                    <Tag className="w-4 h-4 mr-1" />
                    {game.genre}
                  </Badge>
                  <Badge variant="outline">
                    <Clock className="w-4 h-4 mr-1" />
                    {game.playtime}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">{game.description}</p>
                <div className="flex gap-4">
                  <Button className="w-full md:w-auto">Play Now</Button>
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-1/3 space-y-4">
                <div className="bg-card/50 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Developer</h3>
                  <p>{game.developer}</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This developer is also on Patreon and Itch.io - If you like
                    the game please do consider supporting them to keep on
                    making awesome games in the future.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" className="w-full">
                      Patreon
                    </Button>
                    <Button variant="outline" className="w-full">
                      Itch.io
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
