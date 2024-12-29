import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  engine?: string;
  version?: string;
}

interface HeroSliderProps {
  slides?: SlideData[];
  autoplayInterval?: number;
}

const defaultSlides: SlideData[] = [
  {
    id: 1,
    title: "Eternal Memories",
    description:
      "Embark on an emotional journey through time and space in this award-winning visual novel.",
    engine: "RenPy",
    version: "1.0.0",
    imageUrl:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=1512&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Sakura Dreams",
    description:
      "Experience the magic of spring romance in this heartwarming story.",
    engine: "Unity",
    version: "0.8.5",
    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1512&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Cyberpunk Love",
    description: "Navigate love and betrayal in a neon-lit future metropolis.",
    engine: "RenPy",
    version: "2.1.0",
    imageUrl:
      "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=1512&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Academy of Mysteries",
    description: "Uncover dark secrets at an elite magical academy.",
    engine: "Unity",
    version: "1.2.3",
    imageUrl:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1512&h=500&fit=crop",
  },
];

const HeroSlider = ({
  slides = defaultSlides,
  autoplayInterval = 5000,
}: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoplayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-black overflow-hidden">
      {/* Slides */}
      <div
        className="relative w-full h-full flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          willChange: "transform",
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Button
                  size="sm"
                  className="bg-primary/20 hover:bg-primary/30 backdrop-blur-sm text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Play Demo
                </Button>
                <span className="text-sm text-white/80">{slide.engine}</span>
                <span className="text-sm text-white/80">v{slide.version}</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 md:h-6 w-4 md:w-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 md:h-6 w-4 md:w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
