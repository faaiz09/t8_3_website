import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Monitor,
  Smartphone,
  CreditCard,
  Users,
  FileText,
  Server,
  Database,
  ShieldCheck,
  Train,
  Building,
  Download,
  ArrowRight,
} from "lucide-react";

import hrmskiosk from "../assets/img/hrms.png";
import infokisok from "../assets/img/infoko.png";
import reportkiosk from "../assets/img/reportp.png";
import retailkiosk from "../assets/img/retail_kiosk.png";
import visitorkiosk from "../assets/img/visitor.png";
import bankingkiosk from "../assets/img/banking_kiosk.png";
import consultativekiosk from "../assets/img/consultative.png";
import transportkiosk from "../assets/img/transit_Kiosk.png";
import digitalbanking from "../assets/img/digital_banking.png";
import collmngmt from "../assets/img/collection_management.webp";
import remote_monitor from "../assets/img/remote_monitoring.png";
import self_service from "../assets/img/self_service_kiosk.jpg";

import brochure from "../assets/documents/brochure.pdf";

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: "TECHSA" | "INVOS" | "TSSAD";
  image?: string;
  details?: string;
}

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "TECHSA" | "INVOS" | "TSSAD"
  >("TECHSA");

  const products: Product[] = [
    // TECHSA Products
    {
      id: "visitor-kiosk",
      name: "Visitor Management Kiosk",
      description:
        "Streamline visitor registration and management with our advanced kiosk solution.",
      icon: <Users size={24} />,
      category: "TECHSA",
      image:
        visitorkiosk,
      details:
        "Our Visitor Management Kiosk provides a seamless check-in experience for visitors while enhancing security protocols. Features include ID scanning, photo capture, badge printing, and real-time notifications to hosts. The system maintains a digital log of all visitors for compliance and security purposes.",
    },
    {
      id: "retail-kiosk",
      name: "Retail Kiosk",
      description:
        "Enhance customer shopping experience with self-service retail kiosks.",
      icon: <ShoppingBag size={24} />,
      category: "TECHSA",
      image:
        retailkiosk,
      details:
        "Our Retail Kiosks transform the shopping experience by enabling customers to browse products, check prices, place orders, and make payments without assistance. These kiosks reduce wait times, increase sales opportunities through upselling, and provide valuable customer data for marketing insights.",
    },
    {
      id: "hrms-kiosk",
      name: "HRMS Kiosk",
      description:
        "Simplify HR processes with employee self-service kiosks for attendance and more.",
      icon: <Users size={24} />,
      category: "TECHSA",
      image:
        hrmskiosk,
      details:
        "The HRMS Kiosk streamlines human resource management by allowing employees to handle routine tasks independently. Features include attendance tracking, leave management, payslip access, benefits enrollment, and company announcement viewing. This solution reduces HR administrative burden while empowering employees.",
    },
    {
      id: "report-kiosk",
      name: "Report Printing Kiosk",
      description:
        "Enable customers to print statements and reports securely with ease.",
      icon: <FileText size={24} />,
      category: "TECHSA",
      image:
        reportkiosk,
      details:
        "Our Report Printing Kiosks allow customers to securely access and print account statements, transaction histories, and other important documents on demand. These kiosks feature secure authentication, high-quality printing, and digital delivery options, reducing branch workload while improving customer convenience.",
    },
    {
      id: "info-kiosk",
      name: "Information Kiosk",
      description:
        "Provide interactive information access to customers and visitors.",
      icon: <Monitor size={24} />,
      category: "TECHSA",
      image:
        infokisok,
      details:
        "Information Kiosks serve as digital concierges, providing users with wayfinding assistance, product information, service details, and promotional content. These interactive displays feature intuitive touchscreen interfaces, multilingual support, and accessibility options to serve diverse user populations.",
    },

    // INVOS Products
    {
      id: "self-service",
      name: "Self-Service Kiosk Applications",
      description:
        "Comprehensive applications for various self-service scenarios.",
      icon: <Smartphone size={24} />,
      category: "INVOS",
      image:
        self_service,
      details:
        "Our Self-Service Kiosk Applications suite includes customizable software solutions for banking, retail, healthcare, and government sectors. These applications feature modular designs that can be tailored to specific business requirements, with robust security, analytics capabilities, and seamless integration with existing systems.",
    },
    {
      id: "remote-monitoring",
      name: "Remote Monitoring Solutions",
      description: "Monitor and manage your kiosk network from anywhere in real-time.",
      icon: <Server size={24} />,
      category: "INVOS",
      image:
        remote_monitor,
      details:
        "Our Remote Monitoring Solutions provide real-time oversight of your entire kiosk network from a centralized dashboard. Features include hardware status monitoring, software performance tracking, automated alerts for maintenance needs, remote troubleshooting capabilities, and detailed usage analytics to optimize deployment.",
    },
    {
      id: "collection-management",
      name: "Collection Management Solutions",
      description:
        "Streamline payment collection processes with our integrated solutions.",
      icon: <Database size={24} />,
      category: "INVOS",
      image:
        collmngmt,
      details:
        "Our Collection Management Solutions automate and optimize the entire payment collection lifecycle. The system handles multiple payment methods, provides real-time reconciliation, generates comprehensive reports, and integrates with accounting systems. Advanced features include recurring payment scheduling, automated reminders, and fraud detection.",
    },

    // TSSAD Products
    {
      id: "digital-banking",
      name: "Digital Banking Unit",
      description:
        "Complete digital banking solution for modern financial institutions.",
      icon: <CreditCard size={24} />,
      category: "TSSAD",
      image:
        digitalbanking,
      details:
        "The Digital Banking Unit is a comprehensive solution that transforms traditional banking operations into seamless digital experiences. It includes account management, fund transfers, bill payments, loan applications, investment services, and personalized financial insights—all accessible through intuitive interfaces designed for maximum security and user satisfaction.",
    },
    {
      id: "transport-kiosk",
      name: "Transport Kiosk",
      description: "Self-service kiosks for transportation hubs and services streamlining passenger experiences.",
      icon: <Train size={24} />,
      category: "TSSAD",
      image:
        transportkiosk,
      details:
        "Our Transport Kiosks streamline passenger experiences at airports, train stations, and bus terminals. These kiosks enable ticket purchasing, seat selection, boarding pass printing, route information, and schedule updates. Advanced features include biometric verification, contactless payments, and integration with transportation management systems.",
    },
    {
      id: "consultative-kiosk",
      name: "Consultative Kiosk",
      description: "Interactive kiosks for customer consultation and service with personalized assistance.",
      icon: <Users size={24} />,
      category: "TSSAD",
      image:
        consultativekiosk,
      details:
        "Consultative Kiosks bridge the gap between self-service and personalized assistance through video conferencing with remote experts. These kiosks feature high-definition video, document scanning and sharing capabilities, electronic signature collection, and secure transaction processing—ideal for complex financial services, healthcare consultations, and government services.",
    },
    {
      id: "banking-kiosk",
      name: "Banking Kiosk",
      description:
        "Comprehensive banking services in a self-service kiosk format.",
      icon: <Building size={24} />,
      category: "TSSAD",
      image:
        bankingkiosk,
      details:
        "Our Banking Kiosks deliver a full range of financial services without requiring teller assistance. Features include account opening, cash/check deposits, withdrawals, fund transfers, loan applications, card issuance, and account management. These kiosks extend banking services beyond traditional hours and locations while maintaining the highest security standards.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory,
  );

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochure;
    link.download = "brochure.pdf";
    link.click();
  };

  return (
    <section
      id="products"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
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
            Our Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Innovative solutions designed to transform banking and customer
            service experiences
          </p>

          {/* Download Brochure Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-lg inline-flex items-center space-x-2 hover:scale-105 transition-all duration-300"
              size="lg"
              onClick={downloadBrochure}
            >
              <Download size={20} />
              <span>Download Brochure</span>
            </Button>
          </motion.div>
        </motion.div>

        <Tabs
          defaultValue="TECHSA"
          className="w-full"
          onValueChange={(value) => setActiveCategory(value as any)}
        >
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-300 h-100">
              <TabsTrigger
                value="TECHSA"
                className="text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-colors duration-300 py-3"
              >
                TECHSA
              </TabsTrigger>
              <TabsTrigger
                value="INVOS"
                className="text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-colors duration-300 py-3"
              >
                INVOS
              </TabsTrigger>
              <TabsTrigger
                value="TSSAD"
                className="text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-colors duration-300 py-3"
              >
                TSSAD
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-t-red-500 dark:bg-gray-800 dark:border-gray-700 dark:border-t-red-500 transition-colors duration-300">
                      {product.image && (
                        <div className="w-full h-48 overflow-hidden mt-2"> {/* Added mt-2 for margin-top */}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="p-2 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 transition-colors duration-300">
                            {product.icon}
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-700 transition-colors duration-300"
                          >
                            {product.category}
                          </Badge>
                        </div>
                        <CardTitle className="mt-4 text-gray-900 dark:text-white transition-colors duration-300">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="dark:text-gray-300 transition-colors duration-300">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-end">
                          <motion.button
                            className="text-sm text-red-600 dark:text-red-400 font-medium flex items-center group transition-colors duration-300"
                            animate={{ x: [0, 3, 0] }}
                            transition={{
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 1.2,
                              ease: "easeInOut"
                            }}
                            onClick={() => openProductModal(product)}
                          >
                            Learn more
                            <ArrowRight className="h-4 w-4 ml-1 transition-transform" />
                          </motion.button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        {/* Product Details Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-all duration-300">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {selectedProduct.image && (
                <div className="w-full h-64 overflow-hidden mt-2"> {/* Added mt-2 for margin-top */}
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 transition-colors duration-300">
                      {selectedProduct.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-gray-100 dark:bg-gray-700 transition-colors duration-300"
                  >
                    {selectedProduct.category}
                  </Badge>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                  {selectedProduct.details}
                </p>

                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

// Import missing icon
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
