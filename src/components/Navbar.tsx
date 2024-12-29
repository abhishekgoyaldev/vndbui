import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="w-full bg-background border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold hover:text-primary">
            VNDb
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/search">
              <Button variant="link">Browse</Button>
            </Link>
            <Link to="/new-releases">
              <Button variant="link">New Releases</Button>
            </Link>
            <Link to="/top-rated">
              <Button variant="link">Top Rated</Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/search">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/search">
                  <Button variant="ghost" className="w-full justify-start">
                    Browse
                  </Button>
                </Link>
                <Link to="/new-releases">
                  <Button variant="ghost" className="w-full justify-start">
                    New Releases
                  </Button>
                </Link>
                <Link to="/top-rated">
                  <Button variant="ghost" className="w-full justify-start">
                    Top Rated
                  </Button>
                </Link>
                <Button variant="default" className="w-full">
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button variant="default" className="hidden md:inline-flex">
            Sign In
          </Button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 animate-in fade-in slide-in-from-top-2">
          <div className="container mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search visual novels..."
              className="w-full p-2 bg-background border rounded-md"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
