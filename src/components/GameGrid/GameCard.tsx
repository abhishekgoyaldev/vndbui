import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface GameCardProps {
  coverArt?: string;
  title?: string;
  engine?: string;
  version?: string;
  releaseDate?: string;
  rating?: number;
  id?: string;
}

const GameCard = ({
  coverArt = "https://picsum.photos/800/340",
  title = "Mystic Dreams Academy",
  engine = "RenPy",
  version = "1.0.0",
  releaseDate = "2024-03-15",
  rating = 4.5,
  id = "1",
}: GameCardProps) => {
  return (
    <Link to={`/game/${id}`}>
      <Card className="w-full bg-card hover:scale-105 transition-transform duration-200 cursor-pointer">
        <CardContent className="p-0 relative">
          <div className="aspect-[21/9]">
            <img
              src={coverArt}
              alt={title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="absolute top-2 right-2 flex flex-col gap-2 items-end">
            <div className="flex gap-2">
              <Badge variant="secondary" className="backdrop-blur-sm">
                {engine}
              </Badge>
              <Badge variant="secondary" className="backdrop-blur-sm">
                v{version}
              </Badge>
              <Badge className="bg-primary/80 backdrop-blur-sm">
                <Star className="w-4 h-4 mr-1" />
                {rating.toFixed(1)}
              </Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">
            Release Date: {new Date(releaseDate).toLocaleDateString()}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default GameCard;
