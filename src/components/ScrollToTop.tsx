import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  showBelow?: number;
  zIndex?: number;
  fillColor?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  showBelow = 300,
  zIndex = 40, // Lower z-index to prevent overlapping with modals
  fillColor = "#D62626" 
}) => {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
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

  // Calculate clip path for the water fill effect
  // Translate the scroll percentage to a y-position from bottom (100) to top (0)
  const waterFillHeight = 100 - scrollProgress;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
        className={`fixed bottom-24 right-8 z-${zIndex}`}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <div className="relative group">
            <svg
              className="w-16 h-16 drop-shadow-lg"
              viewBox="0 0 100 100"
            >
              {/* Definitions for filters and gradients */}
              <defs>
                {/* Glass effect filter */}
                <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glass" />
                  <feComposite in="SourceGraphic" in2="glass" operator="atop" />
                </filter>

                {/* Water gradient */}
                <linearGradient id="water-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={`${fillColor}CC`} />
                  <stop offset="100%" stopColor={`${fillColor}66`} />
                </linearGradient>

                {/* Water surface effect */}
                <linearGradient id="water-surface" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
                </linearGradient>

                {/* Clip path for water level */}
                <clipPath id="water-clip">
                  <rect x="0" y={waterFillHeight} width="100" height="100" />
                </clipPath>

                {/* Water wave animation */}
                <filter id="wave-effect" x="0" y="0" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="2" seed="1" result="noise">
                    <animate attributeName="baseFrequency" from="0.01 0.05" to="0.01 0.1" dur="10s" repeatCount="indefinite" />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                </filter>
              </defs>

              {/* Glass sphere outer circle */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="rgba(255, 255, 255, 0.1)"
                stroke="#e0e0e0"
                strokeWidth="1"
                filter="url(#glass-effect)"
                className="shadow-lg" // Add shadow class
              />

              {/* Glass sphere inner circle for depth */}
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="0.5"
              />

              {/* Water fill effect */}
              <g clipPath="url(#water-clip)">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="url(#water-gradient)"
                  filter="url(#wave-effect)"
                />

                {/* Water surface highlight */}
                <ellipse
                  cx="50"
                  cy={waterFillHeight}
                  rx="40"
                  ry="2"
                  fill="url(#water-surface)"
                  opacity="0.6"
                />
              </g>

              {/* Shine effect on top of the glass */}
              <ellipse
                cx="35"
                cy="35"
                rx="15"
                ry="10"
                fill="rgba(255, 255, 255, 0.3)"
                transform="rotate(-20, 35, 35)"
              />
            </svg>

            {/* Button with arrow (sits on top of the water sphere) */}
            <button
              onClick={handleClick}
              aria-label="Scroll to top"
              className="absolute inset-0 flex items-center justify-center rounded-full focus:outline-none"
              style={{
                background: "transparent"
              }}
            >
              <ArrowUp
                className="h-6 w-6 text-blue drop-shadow-md transform transition-transform group-hover:translate-y-px"
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;