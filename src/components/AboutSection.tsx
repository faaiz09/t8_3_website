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
  Linkedin,
  Mail,
  Twitter,
  BriefcaseIcon,
  GraduationCap,
} from "lucide-react";

import Products from "../assets/img/product_icon.png";
import Services from "../assets/img/services_icon.png";
import Domains from "../assets/img/domain_icon.png";

import chairman from "../assets/img/ganesh_samant.jpg";
import director from "../assets/img/prasad_samant_2.jpg";
import cro from "../assets/img/prit_gupta.jpg";

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
      value: "8",
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
      name: "Transit",
      icon: <TrainIcon className="h-6 w-6 text-purple-500" />,
      description: "Smart mobility solutions",
    },
    {
      name: "Retail",
      icon: <ShoppingBag className="h-6 w-6 text-pink-500" />,
      description: "Enhanced purchase experiences",
    },
    {
      name: "Government",
      icon: <Building2 className="h-6 w-6 text-red-500" />,
      description: "Public service automation",
    },
    {
      name: "Health",
      icon: <HeartPulse className="h-6 w-6 text-green-500" />,
      description: "Patient-centric systems",
    },
    {
      name: "Consultancy",
      icon: <PhoneIcon className="h-6 w-6 text-blue-500" />,
      description: "Expert technical guidance",
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-6 w-6 text-orange-500" />,
      description: "Learning management solutions",
    },
    {
      name: "Telecom",
      icon: <Globe className="h-6 w-6 text-indigo-500" />,
      description: "Connectivity service systems",
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
      description: "Machine under management across India"
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

  const keyPeople = [
    {
      name: "Ganesh Samant",
      role: "Chairman and Managing Director",
      image: chairman,
      bio: "25+ years of experience",
      expertise: ["R&D", "Product Development", "Marketing​"],
      education: "Bachelor's degree in engineering from Mumbai University and a Master's in technology in material sciences from IIT Bombay.​",
      social: {
        linkedin: "https://www.linkedin.com/in/ganesh-samant-7915b4121/",
        twitter: "https://twitter.com",
        email: "mailto:vyankatesh@t8.com"
      }
    },
    {
      name: "Prasad Samant",
      role: "Director",
      image: director,
      bio: "25+ years of experience",
      expertise: ["Manufacturing​", "Finance Functions"],
      education: "Post-graduation in materials management from Mumbai University",
      social: {
        linkedin: "https://www.linkedin.com/in/samantprasad/",
        twitter: "https://twitter.com",
        email: "mailto:pramod@t8.com"
      }
    },
    {
      name: "Prit Gupta",
      role: "Chief Revenue Officer",
      image: cro,
      bio: "18+ years of experience",
      expertise: ["Sales", "Business Development", "Program & Project Management", " Business Analyst & Pre-Sales"],
      education: "Bachelor of Technology (B.Tech.), Electronics & Instrumentation",
      social: {
        linkedin: "https://www.linkedin.com/in/prit-gupta-378a384/",
        twitter: "https://twitter.com",
        email: "mailto:prit.gupta@technocrafts.co.in"
      }
    }
  ];

  const extendedTeam = [
    {
      name: "Vandana Salaskar",
      role: "VP Service",
      image: "https://ui-avatars.com/api/?name=Vandana+Salaskar&background=ABC80D&color=fff",
    },
    {
      name: "Pramod Patil",
      role: "AGM Software",
      image: "https://ui-avatars.com/api/?name=Pramod+Patil&background=0D8ABC&color=fff",
    },
    {
      name: "Sameer Shaikh",
      role: "AGM Software",
      image: "https://ui-avatars.com/api/?name=Sameer+Shaikh&background=BC0D8A&color=fff",
    },
    {
      name: "Jitendra Bhaskar",
      role: "AVP IT",
      image: "https://ui-avatars.com/api/?name=Jitendra+Bhaskar&background=8ABC0D&color=fff",
    },
    {
      name: "Satish Gholap",
      role: "Channel Head",
      image: "https://ui-avatars.com/api/?name=Satish+Gholap&background=0DABC8&color=fff",
    },
    {
      name: "Samruddhi K",
      role: "Manager QA",
      image: "https://ui-avatars.com/api/?name=Samruddhi+K&background=C80DAB&color=fff",
    },
    {
      name: "Ravindra Kini",
      role: "AVP Sales South",
      image: "https://ui-avatars.com/api/?name=Ravindra+Kini&background=0DC8AB&color=fff",
    },
    {
      name: "Paresh Bhosle",
      role: "Production",
      image: "https://ui-avatars.com/api/?name=Paresh+Bhosle&background=C0DAB8&color=fff",
    },
    {
      name: "Vrushali Shirke",
      role: "Pre Sales and Purchase",
      image: "https://ui-avatars.com/api/?name=Vrushali+Shirke&background=AB8C0D&color=fff",
    },
    // {
    //   name: "Prathmesh P",
    //   role: "R&D",
    //   image: "https://ui-avatars.com/api/?name=Prathmesh+P&background=8C0DAB&color=fff",
    // },
    {
      name: "Rupesh Mohite",
      role: "Accounts",
      image: "https://ui-avatars.com/api/?name=Rupesh+Mohite&background=0D8CAB&color=fff",
    },
    {
      name: "Mukesh Singh",
      role: "Commercial",
      image: "https://ui-avatars.com/api/?name=Mukesh+Singh&background=AB0D8C&color=fff",
    },
    {
      name: "Ruchita More",
      role: "Purchase",
      image: "https://ui-avatars.com/api/?name=Ruchita+More&background=8CAB0D&color=fff",
    },
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
                number: 15000,
                label: "Machines under management",
                icon: <Monitor className="w-14 h-14 text-blue-500 mb-5" />,
                gradient: ["from-blue-400", "to-blue-600"]
              },
              {
                number: 200,
                label: "Customer Service Reps",
                icon: <User className="w-14 h-14 text-green-500 mb-5" />,
                gradient: ["from-green-400", "to-green-600"]
              },
              {
                number: 25,
                label: "Channel Partners",
                icon: <Users className="w-14 h-14 text-red-500 mb-5" />,
                gradient: ["from-red-400", "to-red-600"]
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

        {/* Company Video Section */}
        <motion.div
          className="mb-24 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Background decoration elements */}
          <div className="absolute -z-10 inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="relative inline-block">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                Watch Our Story
              </h3>
              <motion.div
                // className="h-1 w-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 transition-colors duration-300">
              Discover how we're transforming banking technology across India
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
            {/* Video container with fancy border */}
            <motion.div
              className="relative group"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100, 
                damping: 15,
                delay: 0.7
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              
              {/* Video container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/hmB1ktCmMKY?rel=0" 
                    title="T8 Company Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>

                {/* Floating decorative elements that appear on hover */}
                <motion.div 
                  className="absolute -top-3 -right-3 bg-gradient-to-br from-red-500 to-pink-500 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5,
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute -bottom-3 -left-3 bg-gradient-to-tr from-blue-500 to-teal-400 w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>

            {/* Caption with subtle animation */}
            <motion.div
              className="text-center mt-6 text-gray-500 dark:text-gray-400 text-sm italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Filmed at our headquarters in Bhiwandi, Vashere
            </motion.div>
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
        {/* <motion.div
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
        </motion.div> */}

        {/* Key People Section */}
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
            },
            hidden: { opacity: 0 }
          }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center transition-colors duration-300">
            Meet Our Key People
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {keyPeople.map((person, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl dark:shadow-blue-500/10"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.2
                }}
              >
                {/* Decorative gradient blob */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

                <div className="relative">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900 transition-all duration-300 group-hover:ring-blue-200 dark:group-hover:ring-blue-800">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {person.role}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {person.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {person.bio}
                    </p>

                    {/* Education & Experience */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start justify-center text-sm text-gray-500 dark:text-gray-400">
                        <GraduationCap className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-left">{person.education}</span>
                      </div>
                      <div className="flex items-start justify-center text-sm text-gray-500 dark:text-gray-400">
                        <BriefcaseIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-left">{person.expertise.join(" • ")}</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        href={person.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={person.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={person.social.email}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extended Team Section */}
        {/* <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            },
            hidden: { opacity: 0 }
          }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center transition-colors duration-300">
            Our Extended Team
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {extendedTeam.map((member, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1
                }}
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-blue-100 dark:ring-blue-900 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-200 dark:group-hover:ring-blue-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;

// Fix for mobile devices 
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
