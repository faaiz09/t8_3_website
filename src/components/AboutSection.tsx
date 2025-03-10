import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Server, Users, Globe, Code, Cpu, HeartPulse } from "lucide-react";

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
  const domains = [
    { name: "Banking", icon: <Server className="h-6 w-6 text-blue-500" /> },
    { name: "Health", icon: <HeartPulse className="h-6 w-6 text-green-500" /> },
    {
      name: "Government",
      icon: <Building2 className="h-6 w-6 text-red-500" />,
    },
    { name: "Transit", icon: <Train className="h-6 w-6 text-purple-500" /> },
    { name: "Consultancy", icon: <Phone className="h-6 w-6 text-yellow-500" /> },
    { name: "Retail", icon: <ShoppingBag className="h-6 w-6 text-pink-500" /> },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300"
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
            About Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            T8 is a leading provider of innovative banking software and kiosk
            solutions, transforming how financial institutions serve their
            customers.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 text-center transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-50 dark:bg-red-900 rounded-full transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center mb-12">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Our Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              We provide comprehensive banking technology solutions with 24x7
              NOCC team support, ensuring quick query resolution for all our
              clients.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  24x7 NOCC team support
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Quick query resolution for clients
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Comprehensive implementation support
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-8 md:pt-0 md:pl-8 transition-colors duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Technologies
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              Our skilled team members continuously adapt and implement
              cutting-edge technologies for product enhancement and
              optimization.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">
                  <Cpu size={24} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Advanced hardware integration
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">
                  <Code size={24} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Modern software development practices
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">
                  <Users size={24} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  User-centered design approach
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Domains Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
            Our Domains
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex justify-center mb-3">{domain.icon}</div>
                <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                  {domain.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Brochure Button */}
        {/* <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-lg inline-flex items-center space-x-2 hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <Download size={20} />
              <span>Download Brochure</span>
            </Button>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;

// Import missing icons
function Shield(props: any) {
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
