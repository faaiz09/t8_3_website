import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Settings,
  Shield,
  Clock,
  Headphones,
  Server,
  Code,
  ArrowRight,
  X,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string;
  features?: string[];
}

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: "maintenance",
      title: "24x7 Maintenance Support",
      description:
        "Round-the-clock support for all your banking hardware and software needs with quick resolution times.",
      icon: <Settings size={24} />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
      details:
        "Our 24x7 Maintenance Support ensures your banking systems remain operational at all times. Our dedicated team of technicians monitors your infrastructure continuously, providing immediate response to any issues that arise. With proactive maintenance and rapid troubleshooting, we minimize downtime and maintain optimal performance of your critical banking systems.",
      features: [
        "Round-the-clock monitoring and support",
        "Average response time under 15 minutes",
        "Remote diagnostics and troubleshooting",
        "On-site emergency support when needed",
        "Regular maintenance reports and recommendations",
      ],
    },
    {
      id: "monitoring",
      title: "Proactive Monitoring",
      description:
        "Continuous monitoring of your systems to prevent issues before they impact your operations.",
      icon: <Shield size={24} />,
      color:
        "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
      details:
        "Our Proactive Monitoring service uses advanced analytics and AI to detect potential issues before they affect your business. We continuously track system performance, security vulnerabilities, and hardware health to identify and address problems at their earliest stages. This preventive approach significantly reduces unplanned downtime and extends the lifespan of your technology investments.",
      features: [
        "Real-time performance monitoring",
        "Predictive maintenance alerts",
        "Security vulnerability scanning",
        "Automated system health checks",
        "Detailed monthly performance reports",
      ],
    },
    {
      id: "implementation",
      title: "Rapid Implementation",
      description:
        "Quick and efficient implementation of our solutions with minimal disruption to your business.",
      icon: <Clock size={24} />,
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
      details:
        "Our Rapid Implementation methodology accelerates the deployment of new banking technologies while minimizing operational disruption. We use a proven framework that includes thorough planning, parallel testing, and phased rollouts to ensure smooth transitions. Our experienced implementation teams work closely with your staff to provide training and support throughout the process.",
      features: [
        "Comprehensive pre-implementation planning",
        "Streamlined installation and configuration",
        "Parallel testing to ensure system integrity",
        "Phased deployment to minimize disruption",
        "Post-implementation support and optimization",
      ],
    },
    {
      id: "customer-support",
      title: "Customer Support",
      description:
        "Dedicated support team to assist with any queries or issues you may encounter.",
      icon: <Headphones size={24} />,
      color:
        "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300",
      details:
        "Our Customer Support service provides your team with direct access to banking technology experts who understand your specific implementation. Available through multiple channels, our support specialists offer prompt, knowledgeable assistance for both technical issues and operational questions. We maintain detailed documentation of your environment to ensure consistent, personalized support.",
      features: [
        "Dedicated support team familiar with your systems",
        "Multiple support channels (phone, email, chat)",
        "Tiered escalation process for complex issues",
        "Comprehensive knowledge base and documentation",
        "Regular service reviews and improvement plans",
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastructure Management",
      description:
        "Complete management of your IT infrastructure to ensure optimal performance.",
      icon: <Server size={24} />,
      color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
      details:
        "Our Infrastructure Management service provides comprehensive oversight of your entire banking technology ecosystem. We handle all aspects of hardware and software management, including capacity planning, performance optimization, and lifecycle management. This holistic approach ensures all components work together seamlessly while maintaining the highest levels of security and reliability.",
      features: [
        "Comprehensive infrastructure assessment and planning",
        "Hardware and software lifecycle management",
        "Capacity planning and resource optimization",
        "Network management and security hardening",
        "Disaster recovery planning and testing",
      ],
    },
    {
      id: "custom-development",
      title: "Custom Development",
      description:
        "Tailored solutions developed to meet your specific business requirements and challenges.",
      icon: <Code size={24} />,
      color:
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300",
      details:
        "Our Custom Development service creates bespoke banking solutions tailored to your unique business requirements. Our development team combines deep financial industry knowledge with technical expertise to build secure, scalable applications that integrate seamlessly with your existing systems. We follow agile methodologies to ensure your solution evolves with your changing needs.",
      features: [
        "Thorough business requirements analysis",
        "User-centered design approach",
        "Agile development methodology",
        "Comprehensive testing and quality assurance",
        "Ongoing maintenance and enhancement support",
      ],
    },
  ];

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section
      id="services"
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive support and services to ensure your banking technology
            operates at peak efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-red-500 dark:bg-gray-800 dark:border-gray-700 dark:border-t-red-500 overflow-hidden transition-colors duration-300">
                <CardHeader>
                  <div
                    className={`p-3 rounded-full w-fit ${service.color} transition-colors duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 text-gray-900 dark:text-white transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.button
                    className="text-sm text-red-600 dark:text-red-400 font-medium flex items-center group transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={() => openServiceModal(service)}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="relative">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-full ${selectedService.color} transition-colors duration-300`}
                      >
                        {selectedService.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {selectedService.title}
                      </h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsModalOpen(false)}
                      className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <X
                        size={20}
                        className="text-gray-500 dark:text-gray-400"
                      />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white transition-colors duration-300">
                        Overview
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                        {selectedService.details}
                      </p>
                    </div>

                    {selectedService.features && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white transition-colors duration-300">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="min-w-[20px] mt-1">
                                <div className="h-2 w-2 rounded-full bg-red-500 dark:bg-red-400 transition-colors duration-300"></div>
                              </div>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
