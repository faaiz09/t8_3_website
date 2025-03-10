import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  showBelow?: number;
  zIndex?: number;
  fillColor?: string;
  duration?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  showBelow = 300,
  zIndex = 40,
  fillColor = "#D62626",
  duration = 1000
}) => {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    
    setScrollProgress(scrollPercentage);
    
    if (scrollTop > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  }, [show, showBelow]);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, [updateScrollProgress]);

  const handleClick = () => {
    // Set scrolling state to trigger animation
    setIsScrolling(true);
    
    // Get current scroll position
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    
    // Cubic easeInOut function for smooth acceleration and deceleration
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    // Animation function
    const scrollAnimation = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easeProgress));
      
      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      } else {
        // Animation complete
        setIsScrolling(false);
      }
    };
    
    // Start animation
    requestAnimationFrame(scrollAnimation);
  };

  // Calculate clip path for the water fill effect
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
            <motion.svg
              className="w-16 h-16 drop-shadow-lg"
              viewBox="0 0 100 100"
              animate={isScrolling ? { rotate: [0, 360] } : {}}
              transition={isScrolling ? { 
                duration: duration / 1000, 
                ease: "easeInOut" 
              } : {}}
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
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="rgba(255, 255, 255, 0.1)"
                stroke="#e0e0e0"
                strokeWidth="1"
                filter="url(#glass-effect)"
                className="shadow-lg"
                animate={isScrolling ? { scale: [1, 1.1, 1] } : {}}
                transition={isScrolling ? { 
                  duration: duration / 1000,
                  times: [0, 0.5, 1],
                  ease: "easeInOut" 
                } : {}}
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
            </motion.svg>

            {/* Button with arrow (sits on top of the water sphere) */}
            <button
              onClick={handleClick}
              aria-label="Scroll to top"
              className="absolute inset-0 flex items-center justify-center rounded-full focus:outline-none"
              style={{
                background: "transparent"
              }}
            >
              <motion.div
                animate={isScrolling ? 
                  { y: [0, -30, -100], opacity: [1, 0.8, 0] } : 
                  { y: 0, opacity: 1 }
                }
                transition={isScrolling ? {
                  duration: duration / 1000,
                  times: [0, 0.2, 1],
                  ease: "easeOut"
                } : {}}
              >
                <ArrowUp
                  className="h-6 w-6 text-blue drop-shadow-md transform transition-transform group-hover:translate-y-px"
                />
              </motion.div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;