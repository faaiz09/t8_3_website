import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowDown, Code, Terminal } from "lucide-react";
import SolutionCard from "./SolutionCard";

interface SolutionsShowcaseProps {
  title?: string;
  subtitle?: string;
  solutions?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    details: string;
    features: string[];
    color: string;
  }>;
}

const SolutionsShowcase = ({
  title = "Our Solutions",
  subtitle = "Innovative banking technology for the modern financial world",
  solutions = [
    {
      title: "Banking Software",
      description: "Modern banking solutions for financial institutions",
      icon: <Code className="h-8 w-8" />,
      details:
        "Our banking software solutions are designed to streamline operations, enhance security, and improve customer experience for financial institutions of all sizes.",
      features: [
        "Core banking systems",
        "Mobile banking applications",
        "Payment processing solutions",
        "Fraud detection and prevention",
        "Regulatory compliance tools",
      ],
      color: "bg-blue-50",
    },
    {
      title: "Kiosk Solutions",
      description:
        "Self-service banking kiosks for enhanced customer experience",
      icon: <Terminal className="h-8 w-8" />,
      details:
        "Our interactive kiosk solutions provide a seamless self-service experience for banking customers, reducing wait times and operational costs while improving service delivery.",
      features: [
        "Account management kiosks",
        "ATM and cash recycling systems",
        "Customer onboarding terminals",
        "Bill payment stations",
        "Video banking kiosks",
      ],
      color: "bg-purple-50",
    },
  ],
}: SolutionsShowcaseProps) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, staggerChildren: 0.2 },
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ArrowDown className="h-8 w-8 text-blue-500 animate-bounce" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="w-full"
            >
              <SolutionCard
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                details={solution.details}
                features={solution.features}
                color={solution.color}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Looking for a custom solution? We specialize in tailored banking
            technology.
          </p>
          <motion.button
            className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
