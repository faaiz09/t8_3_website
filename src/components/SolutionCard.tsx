import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface SolutionCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  details?: string;
  features?: string[];
  color?: string;
}

const SolutionCard = ({
  title = "Banking Software",
  description = "Modern banking solutions for financial institutions",
  icon = <Code className="h-8 w-8" />,
  details = "Our banking software solutions are designed to streamline operations, enhance security, and improve customer experience for financial institutions of all sizes.",
  features = [
    "Core banking systems",
    "Mobile banking applications",
    "Payment processing solutions",
    "Fraud detection and prevention",
  ],
  color = "bg-blue-50",
}: SolutionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="w-full max-w-[650px] h-auto bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
    >
      <Card
        className={`overflow-hidden border-2 shadow-lg transition-all duration-300 ${isExpanded ? "h-auto" : "h-[400px]"}`}
      >
        <CardHeader className={`${color} p-6`}>
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-full bg-white/90 shadow-md">{icon}</div>
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleExpand}
                aria-label="Expand card"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <CardTitle className="text-2xl font-bold mt-4">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">{details}</p>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-end">
          <Button variant="outline" onClick={toggleExpand} className="group">
            {isExpanded ? "Show Less" : "Learn More"}
            <motion.span
              animate={{ x: isExpanded ? -5 : 5 }}
              transition={{
                repeat: isExpanded ? 0 : Infinity,
                repeatType: "reverse",
                duration: 0.8,
              }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SolutionCard;
