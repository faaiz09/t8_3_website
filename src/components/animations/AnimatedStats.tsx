import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "../ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp, Users, Building, ShieldCheck } from "lucide-react";

interface StatItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  value: number;
  target: number;
  prefix?: string;
  suffix?: string;
  color: string;
}

interface AnimatedStatsProps {
  stats?: StatItem[];
  animationDuration?: number;
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({
  stats = [
    {
      id: 1,
      icon: <TrendingUp size={24} />,
      label: "Transaction Growth",
      value: 0,
      target: 127,
      suffix: "%",
      color: "bg-blue-500",
    },
    {
      id: 2,
      icon: <Users size={24} />,
      label: "Active Users",
      value: 0,
      target: 2.4,
      prefix: "",
      suffix: "M",
      color: "bg-indigo-500",
    },
    {
      id: 3,
      icon: <Building size={24} />,
      label: "Bank Partners",
      value: 0,
      target: 50,
      color: "bg-amber-500",
    },
    {
      id: 4,
      icon: <ShieldCheck size={24} />,
      label: "Security Rating",
      value: 0,
      target: 99.9,
      suffix: "%",
      color: "bg-emerald-500",
    },
  ],
  animationDuration = 2000,
}) => {
  const [currentValues, setCurrentValues] = useState<number[]>(
    stats.map(() => 0),
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation when component mounts
    setIsVisible(true);

    // Animate the numbers
    const interval = setInterval(() => {
      setCurrentValues((prev) => {
        return prev.map((value, index) => {
          const target = stats[index].target;
          if (value < target) {
            // Calculate increment based on target value and remaining time
            const increment = Math.max(target / 100, 0.1);
            return Math.min(value + increment, target);
          }
          return target;
        });
      });
    }, animationDuration / 100);

    // Clear interval when all values reach their targets
    const timeout = setTimeout(() => {
      clearInterval(interval);
      // Ensure all values are exactly at their targets
      setCurrentValues(stats.map((stat) => stat.target));
    }, animationDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [stats, animationDuration]);

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-full ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-700">
                    {stat.label}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-[#0D47A1]">
                      {stat.prefix}
                      {Math.round(currentValues[index] * 10) / 10}
                      {stat.suffix}
                    </span>
                  </div>
                  <Progress
                    value={(currentValues[index] / stat.target) * 100}
                    className="h-2 bg-gray-100"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
