import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClientLogoProps {
  logos?: {
    name: string;
    src: string;
    alt: string;
  }[];
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
}

const ClientLogoSlider = ({
  logos = [
    {
      name: "HDFC Bank",
      src: "https://i.ibb.co/Qj1Hn3L/hdfc-bank.png",
      alt: "HDFC Bank Logo",
    },
    {
      name: "ICICI Bank",
      src: "https://i.ibb.co/Qj1Hn3L/icici-bank.png",
      alt: "ICICI Bank Logo",
    },
    {
      name: "Axis Bank",
      src: "https://i.ibb.co/Qj1Hn3L/axis-bank.png",
      alt: "Axis Bank Logo",
    },
    {
      name: "Canara Bank",
      src: "https://i.ibb.co/Qj1Hn3L/canara-bank.png",
      alt: "Canara Bank Logo",
    },
  ],
  autoplaySpeed = 2000,
  pauseOnHover = true,
}: ClientLogoProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
      }, autoplaySpeed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, logos.length, autoplaySpeed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="w-full py-12 px-4 bg-white overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Trusted by Leading Financial Institutions
        </h2>

        <div className="relative h-32 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative w-48 h-24 mx-auto">
                  <motion.img
                    src={logos[currentIndex].src}
                    alt={logos[currentIndex].alt}
                    className="object-contain w-full h-full filter hover:filter-none transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div
                    className="absolute -bottom-6 left-0 right-0 text-center text-sm font-medium text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {logos[currentIndex].name}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Logo slider dots */}
        <div className="flex justify-center space-x-2">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`View ${logos[index].name} logo`}
            />
          ))}
        </div>

        {/* All logos in a row (visible on larger screens) */}
        <div className="hidden md:flex justify-around items-center mt-12">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="mx-4 relative"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-16 object-contain filter hover:filter-none transition-all duration-300 ${index === currentIndex ? "filter-none" : ""}`}
              />
              <div className="text-xs text-center mt-2 text-gray-600">
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
