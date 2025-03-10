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
  TrainIcon,
  PhoneIcon,
  User,
  Monitor,
} from "lucide-react";

import Products from "../assets/img/product_icon.png";
import Services from "../assets/img/services_icon.png";
import Domains from "../assets/img/domain_icon.png";

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
    {
      value: "13+",
      label: "Products",
      icon: <img src={Products} alt="Products" className="h-6 w-6" />,
    },
    {
      value: "10",
      label: "Services",
      icon: <img src={Services} alt="Services" className="h-6 w-6" />,
    },
    {
      value: "6",
      label: "Domains",
      icon: <img src={Domains} alt="Domains" className="h-6 w-6" />,
    },
  ],
}: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const domains = [
    {
      name: "Banking",
      icon: <Server className="h-6 w-6 text-yellow-500" />,
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
      icon: <TrainIcon className="h-6 w-6 text-purple-500" />,
      description: "Smart mobility solutions",
    },
    {
      name: "Consultancy",
      icon: <PhoneIcon className="h-6 w-6 text-blue-500" />,
      description: "Expert technical guidance",
    },
    {
      name: "Retail",
      icon: <ShoppingBag className="h-6 w-6 text-pink-500" />,
      description: "Enhanced purchase experiences",
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

  const achievements = [
    {
      value: "25+",
      description: "Channel Partners Across India"
    },
    {
      value: "15,000+",
      description: "Online Kiosks Across India"
    },
    {
      value: "200+",
      description: "Customer Service Representatives Across India"
    },
    {
      value: "1M+",
      description: "Satisfied Customers Nationwide"
    }
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden relative w-full"
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

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Us
          </h2>
          {/* <motion.div
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
          </motion.div> */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ z: 20 }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-600 to-blue-600 opacity-0 blur transition duration-500 group-hover:opacity-30"></div>

              {/* Card content */}
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 group-hover:translate-y-[-10px] group-hover:shadow-2xl">
                <div className="flex items-center">
                  <motion.div
                    className="p-4 bg-red-50 dark:bg-red-900/50 rounded-full transition-colors duration-300 mr-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="text-3xl">
                      {index === 0 ? (
                        <img
                          src={Products}
                          alt="Products"
                          className="h-20 w-20"
                        />
                      ) : index === 1 ? (
                        <img
                          src={Services}
                          alt="Services"
                          className="h-20 w-20"
                        />
                      ) : (
                        <img
                          src={Domains}
                          alt="Domains"
                          className="h-20 w-20"
                        />
                      )}
                    </div>
                  </motion.div>
                  <div className="text-left">
                    <motion.h3
                      className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300"
                      animate={{ scale: [1, 1.05, 1] }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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

        {/* Achievements */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center transition-colors duration-300">
            {/* <span className="absolute inset-x-0 -bottom-3 h-1.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full blur-sm" /> */}
            Our Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: 25,
                label: "Channel Partners",
                icon: <Users className="w-14 h-14 text-red-500 mb-5" />,
                gradient: ["from-red-400", "to-red-600"]
              },
              {
                number: 15000,
                label: "Online Kiosks",
                icon: <Monitor className="w-14 h-14 text-blue-500 mb-5" />,
                gradient: ["from-blue-400", "to-blue-600"]
              },
              {
                number: 200,
                label: "Customer Service Reps",
                icon: <User className="w-14 h-14 text-green-500 mb-5" />,
                gradient: ["from-green-400", "to-green-600"]
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl transform-gpu"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                whileInView={{ scale: [1, 1.02, 1] }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: index * 0.15 + 0.5
                  }}
                >
                  {achievement.icon}
                </motion.div>

                <div className="space-y-3">
                  <motion.span
                    className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${achievement.gradient.join(' ')}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.2 + 0.6
                    }}
                  >
                    {achievement.number}+
                  </motion.span>

                  <p className="text-gray-600 dark:text-gray-300 text-lg font-medium tracking-tight">
                    {achievement.label} across India
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Domains Section with simplified animations */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center transition-colors duration-300">
            Our Domains
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 transition-colors duration-300"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex justify-center">{domain.icon}</div>
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

// Fix for mobile devices - ensure Building2 icon renders properly
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
