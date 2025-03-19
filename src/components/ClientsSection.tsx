import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import hdfc from "../assets/img/hdfc.png";
import icici from "../assets/img/icici.png";
import axis from "../assets/img/axis.png";
import canara from "../assets/img/canara.png";
import kalupur from "../assets/img/kalupur.png";
import dbs from "../assets/img/dbs.png";
import bmrcl from "../assets/img/bmrcl.png";
import mumbaiMetro from "../assets/img/mmrc.png";
import mvretail from "../assets/img/mvretail.png";
import drlals from "../assets/img/drlalpathlabs.png";
import rbl from "../assets/img/rbl.png";
import smriti from "../assets/img/smriti.png";
import karnataka from "../assets/img/karnataka.png";
import sewa from "../assets/img/sewabank.png";
import chola from "../assets/img/chola.png";
import mahagenco from "../assets/img/mahagenco.png";
import sci from "../assets/img/sci.png";
import vedanta from "../assets/img/vedanta.png";

interface ClientCategory {
  id: string;
  name: string;
  clients: {
    id: string;
    name: string;
    logo: string;
  }[];
}

const ClientsSection = () => {
  const [activeCategory, setActiveCategory] = useState("banking");
  const [autoRotate, setAutoRotate] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  // Auto-rotate categories every 5 seconds if not hovered
  useEffect(() => {
    if (!autoRotate) return;

    const categories = ["banking", "finserv", "government", "healthcare"];
    const interval = setInterval(() => {
      setActiveCategory((prevCategory) => {
        const currentIndex = categories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  // Pause auto-rotation when hovering over the section
  const handleMouseEnter = () => setAutoRotate(false);
  const handleMouseLeave = () => setAutoRotate(true);

  const clientCategories: ClientCategory[] = [
    {
      id: "banking",
      name: "Banking",
      clients: [
        { id: "icici", name: "ICICI Bank", logo: icici },
        { id: "hdfc", name: "HDFC Bank", logo: hdfc },
        { id: "axis", name: "Axis Bank", logo: axis },
        { id: "karnataka", name: "Karnataka Bank", logo: karnataka },
        { id: "rbl", name: "RBL Bank", logo: rbl },
        { id: "dbs", name: "DBS Bank", logo: dbs },
        { id: "canara", name: "Canara Bank", logo: canara },
        { id: "kalupur", name: "Kalupur Bank", logo: kalupur },
        { id: "smriti", name: "Smriti Bank", logo: smriti },
        { id: "sewa", name: "Shri Mahila Sewa Sahakari Bank", logo: sewa },
      ],
    },
    {
      id: "finserv",
      name: "Finserv",
      clients: [
        { id: "mv-retail", name: "MV Retail", logo: mvretail },
        // { id: "sci", name: "SCI", logo: sci },
        { id: "vedanta", name: "Vedanta", logo: vedanta },
      ],
    },
    {
      id: "government",
      name: "Government",
      clients: [
        { id: "mahagenco", name: "Maha Genco", logo: mahagenco },
        { id: "bmrcl", name: "BMRCL", logo: bmrcl },
        { id: "mumbai-metro", name: "Mumbai Metro", logo: mumbaiMetro },
      ],
    },
    {
      id: "healthcare",
      name: "Health Care",
      clients: [
        { id: "dr-lals", name: "Dr. Lals Pathlab", logo: drlals },
        { id: "chola", name: "Chola MS Insurence", logo: chola }
      ],

    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-500/5 dark:bg-red-500/10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(50px)",
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Marquee Customers Across Industry Verticals
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
          In less than 2 years, we've successfully onboarded three of the country's largest banks as our valued customers
          </p>
        </motion.div>

        <Tabs
          value={activeCategory}
          className="w-full relative z-10"
          onValueChange={setActiveCategory}
        >
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <TabsList className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-full p-1 transition-colors duration-300">
              {clientCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white dark:data-[state=active]:bg-red-600 transition-all duration-300 min-w-[100px]"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative">
            {clientCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.clients.map((client, index) => (
                    <motion.div
                      key={client.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex justify-center"
                      onMouseEnter={() => setHoveredClient(client.id)}
                      onMouseLeave={() => setHoveredClient(null)}
                    >
                      <Card
                        className={`h-full w-full overflow-hidden transition-all duration-500 dark:bg-gray-800 dark:border-gray-700 ${hoveredClient === client.id ? "shadow-2xl scale-105 border-red-500 dark:border-red-500" : "shadow-md hover:shadow-lg"}`}
                      >
                        <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center relative overflow-hidden">
                          {/* Animated background on hover */}
                          {hoveredClient === client.id && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20 z-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {/* Animated particles */}
                              {[...Array(10)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute rounded-full bg-red-500/20 dark:bg-red-400/30"
                                  style={{
                                    width: Math.random() * 20 + 5,
                                    height: Math.random() * 20 + 5,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                  }}
                                  animate={{
                                    y: [0, -100],
                                    x: [0, Math.random() * 50 - 25],
                                    opacity: [1, 0],
                                    scale: [1, 0.5],
                                  }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: Math.random() * 4 + 3, // Slower animation
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}

                          <motion.div
                            className="relative z-10"
                            animate={
                              hoveredClient === client.id
                                ? {
                                    y: [0, -5, 0],
                                    transition: {
                                      repeat: Infinity,
                                      duration: 2,
                                    },
                                  }
                                : {}
                            }
                          >
                            <motion.img
                              src={client.logo}
                              alt={`${client.name} Logo`}
                              className={`h-16 object-contain mb-4 transition-all duration-300 ${client.id === "mumbai-metro" ? "mx-auto" : ""}`}
                              loading="lazy"
                              initial={{ filter: "brightness(1)" }}
                              animate={{
                                filter:
                                  hoveredClient === client.id
                                    ? "brightness(1.2)"
                                    : "brightness(1)",
                                scale: hoveredClient === client.id ? 1.1 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.p
                              className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
                              animate={{
                                color:
                                  hoveredClient === client.id ? "#ef4444" : "",
                              }}
                            >
                              {client.name}
                            </motion.p>
                          </motion.div>

                          {/* Animated border on hover */}
                          {hoveredClient === client.id && (
                            <>
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-red-400 to-red-500 rounded-b"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1 }}
                              />
                              <motion.div
                                className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-red-500 via-red-400 to-red-500 rounded-l"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, delay: 0.1 }}
                              />
                              <motion.div
                                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-red-400 to-red-500 rounded-t"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                              />
                              <motion.div
                                className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-red-500 via-red-400 to-red-500 rounded-r"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                              />
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Animated trust badges */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-300">
            Why Our Clients Trust Us
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: "🔒",
                title: "Secure",
                description: "Bank-grade security protocols",
              },
              {
                icon: "⚡",
                title: "Reliable",
                description: "99.9% uptime guarantee",
              },
              {
                icon: "🔄",
                title: "Scalable",
                description: "Grows with your business",
              },
              {
                icon: "🛠️",
                title: "Supported",
                description: "24/7 technical assistance",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  className="text-4xl mb-3"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotateY: { repeat: Infinity, duration: 5, ease: "linear" },
                    scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  }}
                >
                  {badge.icon}
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                  {badge.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
