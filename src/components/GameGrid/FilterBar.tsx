import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Calendar, Flame, Star, Tag } from "lucide-react";

interface FilterBarProps {
  onSortChange?: (value: string) => void;
  onGenreChange?: (value: string) => void;
  selectedSort?: string;
  selectedGenre?: string;
}

const FilterBar = ({
  onSortChange = () => {},
  onGenreChange = () => {},
  selectedSort = "popularity",
  selectedGenre = "all",
}: FilterBarProps) => {
  return (
    <div className="w-full p-4 flex flex-wrap gap-4 items-center justify-between bg-background border-b">
      <div className="flex flex-wrap gap-4">
        <Select defaultValue={selectedSort} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">
              <div className="flex items-center">
                <Flame className="mr-2 h-4 w-4" />
                Popularity
              </div>
            </SelectItem>
            <SelectItem value="releaseDate">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Release Date
              </div>
            </SelectItem>
            <SelectItem value="rating">
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4" />
                Rating
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue={selectedGenre} onValueChange={onGenreChange}>
          <SelectTrigger className="w-[180px]">
            <Tag className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genres</SelectItem>
            <SelectItem value="romance">Romance</SelectItem>
            <SelectItem value="mystery">Mystery</SelectItem>
            <SelectItem value="fantasy">Fantasy</SelectItem>
            <SelectItem value="scifi">Sci-Fi</SelectItem>
            <SelectItem value="horror">Horror</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Grid View
        </Button>
        <Button variant="outline" size="sm">
          List View
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
