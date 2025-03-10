import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Server,
  Users,
  Globe,
  Code,
  Cpu,
  HeartPulse,
  Zap,
  Rocket,
} from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface AboutSectionProps {
  stats?: StatItem[];
}

const AboutSection = ({
  stats = [
    { value: "13+", label: "Products", icon: <Code size={24} /> },
    { value: "10", label: "Services", icon: <Server size={24} /> },
    { value: "6", label: "Domains", icon: <Globe size={24} /> },
  ],
}: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const domains = [
    {
      name: "Banking",
      icon: <Server className="h-6 w-6 text-blue-500" />,
      description: "Secure financial solutions",
    },
    {
      name: "Health",
      icon: <HeartPulse className="h-6 w-6 text-green-500" />,
      description: "Patient-centric systems",
    },
    {
      name: "Government",
      icon: <Building2 className="h-6 w-6 text-red-500" />,
      description: "Public service automation",
    },
    {
      name: "Transit",
      icon: <Train className="h-6 w-6 text-purple-500" />,
      description: "Smart mobility solutions",
    },
    {
      name: "Consultancy",
      icon: <Phone className="h-6 w-6 text-yellow-500" />,
      description: "Expert technical guidance",
    },
    {
      name: "Retail",
      icon: <ShoppingBag className="h-6 w-6 text-pink-500" />,
      description: "Enhanced shopping experiences",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const techSkills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Cloud", level: 80 },
    { name: "Security", level: 95 },
    { name: "UI/UX", level: 88 },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden relative"
      ref={ref}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pointer-events-none"></div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500/10 dark:bg-red-500/20"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 360, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block mb-4 relative"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <h2 className="relative bg-white dark:bg-gray-900 px-6 py-2 rounded-lg text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                About Us
              </h2>
            </div>
          </motion.div>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            T8 is a leading provider of innovative banking software and kiosk
            solutions, transforming how financial institutions serve their
            customers.
          </motion.p>
        </motion.div>

        {/* Stats Section with 3D cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ z: 20 }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-600 to-blue-600 opacity-0 blur transition duration-500 group-hover:opacity-30"></div>

              {/* Card content */}
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 group-hover:translate-y-[-10px] group-hover:shadow-2xl">
                <div className="flex items-center">
                  <motion.div
                    className="p-4 bg-red-50 dark:bg-red-900 rounded-full transition-colors duration-300 mr-4"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="text-3xl">{stat.icon}</div>
                  </motion.div>
                  <div className="text-left">
                    <motion.h3
                      className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Hover reveal content */}
                <motion.div
                  className="mt-4 overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100"
                  initial={{ height: 0 }}
                  whileHover={{ height: "auto" }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {index === 0 &&
                      "Innovative solutions across multiple platforms"}
                    {index === 1 && "Comprehensive support and maintenance"}
                    {index === 2 && "Expertise in diverse industry sectors"}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <motion.div
          className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Mission */}
            <motion.div
              className="p-8 relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full -mr-20 -mt-20 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                    <Rocket className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                  To revolutionize banking and customer service through
                  innovative technology solutions that enhance efficiency,
                  security, and user experience.
                </p>
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-300 rounded-full"
                  animate={{ width: [0, 80] }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="p-8 bg-gray-50 dark:bg-gray-700/50 relative overflow-hidden transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full -ml-20 -mb-20 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                  To be the global leader in digital transformation for
                  financial institutions and service providers, setting new
                  standards for innovation and excellence.
                </p>
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                  animate={{ width: [0, 80] }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Skills */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 transition-colors duration-300">
            Our Technical Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-medium text-red-600 dark:text-red-400 transition-colors duration-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-colors duration-300">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-600 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Domains Section with hover effects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center transition-colors duration-300">
            Our Domains
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(239, 68, 68, 0.05)",
                }}
              >
                <div className="flex items-start">
                  <motion.div
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mr-4 transition-colors duration-300"
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-2xl">{domain.icon}</div>
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                      {domain.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 transition-colors duration-300">
            Our Core Values
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                value: "Innovation",
                icon: <Cpu className="h-5 w-5 text-red-500" />,
              },
              {
                value: "Security",
                icon: <ShieldIcon className="h-5 w-5 text-blue-500" />,
              },
              {
                value: "Reliability",
                icon: <Server className="h-5 w-5 text-green-500" />,
              },
              {
                value: "Customer Focus",
                icon: <Users className="h-5 w-5 text-purple-500" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.1 + 0.9 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                {item.icon}
                <span className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

// Import missing icons
function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Building2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v20" />
      <path d="M6 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2" />
      <path d="M18 12h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2" />
      <path d="M10 7H8" />
      <path d="M16 7h-2" />
      <path d="M10 11H8" />
      <path d="M16 11h-2" />
      <path d="M10 15H8" />
      <path d="M16 15h-2" />
    </svg>
  );
}

function Train(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="16" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="M8 19l-2 3" />
      <path d="M18 22l-2-3" />
      <path d="M8 15h0" />
      <path d="M16 15h0" />
    </svg>
  );
}

function Phone(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ShoppingBag(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
