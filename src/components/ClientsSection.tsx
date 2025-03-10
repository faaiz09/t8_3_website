import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const [activeCategory, setActiveCategory] = useState("finance");
  const [autoRotate, setAutoRotate] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-rotate categories every 5 seconds if not hovered
  useEffect(() => {
    if (!autoRotate) return;

    const categories = ["finance", "finserv", "transit", "healthcare"];
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
      id: "finance",
      name: "Finance",
      clients: [
        { id: "hdfc", name: "HDFC Bank", logo: hdfc },
        { id: "axis", name: "Axis Bank", logo: axis },
        { id: "canara", name: "Canara Bank", logo: canara },
        { id: "icici", name: "ICICI Bank", logo: icici },
        {
          id: "kalupur",
          name: "Kalupur Bank",
          logo: kalupur,
        },
        {
          id: "dbs",
          name: "DBS Bank",
          logo: dbs,
        },
      ],
    },
    {
      id: "finserv",
      name: "Finserv",
      clients: [
        {
          id: "mv-retail",
          name: "MV Retail",
          logo: mvretail,
        },
      ],
    },
    {
      id: "transit",
      name: "Transit",
      clients: [
        {
          id: "bmrcl",
          name: "BMRCL",
          logo: bmrcl,
        },
        {
          id: "mumbai-metro",
          name: "Mumbai Metro",
          logo: mumbaiMetro,
        },
      ],
    },
    {
      id: "healthcare",
      name: "Health Care",
      clients: [
        {
          id: "dr-lals",
          name: "Dr. Lals Pathlab",
          logo: drlals,
        },
      ],
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Trusted by leading organizations across various industries
          </p>
        </motion.div>

        <Tabs
          value={activeCategory}
          className="w-full"
          onValueChange={setActiveCategory}
        >
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
              {clientCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-colors duration-300 data-[state=active]:text-red-600"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {clientCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.clients.map((client, index) => (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex justify-center"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden w-full dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                        <img
                          src={client.logo}
                          alt={`${client.name} Logo`}
                          className="h-16 object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                          loading="lazy"
                        />
                        <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                          {client.name}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ClientsSection;
