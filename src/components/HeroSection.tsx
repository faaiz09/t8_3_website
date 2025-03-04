import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Revolutionizing Banking",
  subtitle = "with Intelligent Software & Kiosks",
  ctaText = "Explore Solutions",
  onCtaClick = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80",
}: HeroSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // 3D animation effect for logo
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * 20;
      const rotateY = (x / rect.width) * -20;

      logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      logo.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    logo.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      logo.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white"
      ref={ref}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: "translateZ(-10px) scale(2)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 3D Animated Logo */}
        <motion.div
          ref={logoRef}
          className="mb-8 mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transition: "transform 0.3s ease-out" }}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto">
            <img
              src="https://i.ibb.co/Qj1bRfL/t8-logo.png"
              alt="T8 Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Title with Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle with Animation */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {subtitle}
        </motion.h2>

        {/* CTA Button with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            {ctaText}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <ArrowDown className="h-8 w-8 text-red-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
