import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  isActive: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ isActive }) => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
  const pieces = Array.from({ length: 50 });

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
            top: '-10px',
          }}
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: [0, window.innerHeight + 100],
            rotate: [0, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti; 