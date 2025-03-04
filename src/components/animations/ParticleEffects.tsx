import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParticleEffectsProps {
  color?: string;
  particleCount?: number;
  speed?: number;
  opacity?: number;
  width?: number | string;
  height?: number | string;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleEffects: React.FC<ParticleEffectsProps> = ({
  color = "#42A5F5",
  particleCount = 50,
  speed = 1,
  opacity = 0.5,
  width = "100%",
  height = 300,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    setDimensions({ width, height });

    // Create particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random() * opacity,
      });
    }

    setParticles(newParticles);

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, speed, opacity]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      const updatedParticles = particles.map((particle) => {
        // Update position
        let x = particle.x + particle.speedX;
        let y = particle.y + particle.speedY;

        // Bounce off edges
        if (x <= 0 || x >= dimensions.width) {
          particle.speedX *= -1;
          x = Math.max(0, Math.min(x, dimensions.width));
        }

        if (y <= 0 || y >= dimensions.height) {
          particle.speedY *= -1;
          y = Math.max(0, Math.min(y, dimensions.height));
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((p2) => {
          const dx = x - p2.x;
          const dy = y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = (1 - distance / 100) * 0.2;
            ctx.stroke();
          }
        });

        return {
          ...particle,
          x,
          y,
        };
      });

      setParticles(updatedParticles);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, dimensions, color]);

  return (
    <motion.div
      className={`relative overflow-hidden bg-white ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0 w-full h-full"
      />
    </motion.div>
  );
};

export default ParticleEffects;
