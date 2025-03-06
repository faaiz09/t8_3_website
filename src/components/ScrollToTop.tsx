import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  showBelow?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showBelow = 300 }) => {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;

      // Update scroll progress
      setScrollProgress(scrollPercentage);

      // Show button when user has scrolled down enough
      if (scrollTop > showBelow) {
        if (!show) setShow(true);
      } else {
        if (show) setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show, showBelow]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Circular progress indicator */}
            <svg className="w-14 h-14 -rotate-90" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 dark:text-gray-700 transition-colors duration-300"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-red-600 dark:text-red-500 transition-colors duration-300"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - scrollProgress / 100)}`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />

              {/* Text showing percentage */}
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold fill-gray-700 dark:fill-gray-300 transition-colors duration-300"
                transform="rotate(90, 50, 50)"
              >
                {Math.round(scrollProgress)}%
              </text>
            </svg>

            {/* Button with arrow icon */}
            <button
              onClick={handleClick}
              aria-label="Scroll to top"
              className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none"
            >
              <ArrowUp className="h-6 w-6 text-red-600 dark:text-red-500" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
