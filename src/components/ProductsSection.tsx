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
  Printer,
  FileCheck,
  CreditCard as CardIcon,
  Building2,
  ShoppingCart,
  Receipt,
  Landmark,
  Ticket,
  Cog,
  BarChart,
  Code,
  Users2,
  Clock,
} from "lucide-react";
import ServicesMap from "./ServicesMap";

// import hrmskiosk from "../assets/img/hrms.png";
// import infokisok from "../assets/img/infoko.png";
// import reportkiosk from "../assets/img/reportp.png";
// import retailkiosk from "../assets/img/retail_kiosk.png";
// import visitorkiosk from "../assets/img/visitor.png";
import bankingkiosk from "../assets/img/banking_kiosk.png";
import consultativekiosk from "../assets/img/consultative.png";
import transportkiosk from "../assets/img/transit_Kiosk.png";
import digitalbanking from "../assets/img/digital_banking.png";
// import collmngmt from "../assets/img/collection_management.webp";
// import remote_monitor from "../assets/img/remote_monitoring.png";
// import self_service from "../assets/img/self_service_kiosk.png";

import cashdeposit from "../assets/img/cash_deposit.png";
import passbook from "../assets/img/passbook.png";
import policy from "../assets/img/policy.png";
import cheque from "../assets/img/cheque.png";
import accountopening from "../assets/img/account_opening.png";

import registration from "../assets/img/registration.png";
import healthcarepayment from "../assets/img/healthcare_payment.png";
import healthcarereport from "../assets/img/healthcare_report.png";

import selfcheckout from "../assets/img/self_checkout.png";
import selfordering from "../assets/img/self_ordering.png";
import paymentskiosk from "../assets/img/payments_kiosk.png";
import preorder from "../assets/img/pre_order.png";

import judiciary from "../assets/img/judiciary.png";
import smartcity from "../assets/img/smart_city.png";
import billpayment from "../assets/img/bill_payment.png";
import landrecord from "../assets/img/land_record.png";
import ticketvending from "../assets/img/ticket_vending.png";

import s8platform from "../assets/img/s8_platform.png";
import invos from "../assets/img/invos.png";
import middleware from "../assets/img/middleware.png";
import qms from "../assets/img/qms.png";
import customsoftware from "../assets/img/custom_software.png";

import brochure from "../assets/documents/brochure.pdf";

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: "KIOSKS" | "SOLUTIONS" | "SERVICES";
  subCategory?: string;
  image?: string;
  details?: string;
}

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "KIOSKS" | "SOLUTIONS" | "SERVICES"
  >("KIOSKS");

  const [activeBankingSubCategory, setActiveBankingSubCategory] = useState("FINANCE_SERVICE");

  const products: Product[] = [
    // KIOSKS Products - Finance Service
    {
      id: "cheque-deposit",
      name: "Cheque Deposit Kiosk",
      description: "Automated cheque processing and deposit system.",
      icon: <Receipt size={24} />,
      category: "KIOSKS",
      subCategory: "FINANCE_SERVICE",
      image: cheque,
      details: "Our Cheque Deposit Kiosk transforms cheque processing with advanced MICR reading and image capture technology. Features include real-time verification, instant validation, and secure processing. The system supports multiple cheque deposits, provides clear scan images for records, and offers immediate transaction confirmations. Enhanced with fraud detection capabilities and integration with core banking systems.",
    },
    {
      id: "passbook-printing",
      name: "Passbook Printing Kiosk",
      description: "Self-service passbook printing and updating.",
      icon: <Printer size={24} />,
      category: "KIOSKS",
      subCategory: "FINANCE_SERVICE",
      image: passbook,
      details: "Our Passbook Printing Kiosk modernizes traditional banking with automated passbook updating services. Features include high-speed printing, magnetic stripe reading, barcode scanning, and automatic page detection. The system supports multiple passbook formats, provides clear transaction histories, and offers digital backup options. Enhanced with user-friendly interface and multi-language support for diverse customer bases.",
    },
    {
      id: "cash-deposit",
      name: "Cash Deposit Kiosk",
      description: "Secure and efficient cash deposit solution for banks.",
      icon: <CreditCard size={24} />,
      category: "KIOSKS",
      subCategory: "FINANCE_SERVICE",
      image: cashdeposit,
      details: "Our Cash Deposit Kiosk revolutionizes the way customers handle cash deposits. Featuring advanced counterfeit detection technology, real-time account crediting, and multi-currency support. The system provides instant transaction receipts, supports both loose notes and bundled deposits, and maintains detailed audit trails. Perfect for reducing branch queues and extending deposit services beyond banking hours.",
    },
    {
      id: "policy-printing",
      name: "Policy Printing Kiosk",
      description: "On-demand insurance policy printing solution.",
      icon: <FileCheck size={24} />,
      category: "KIOSKS",
      subCategory: "FINANCE_SERVICE",
      image: policy,
      details: "The Policy Printing Kiosk streamlines insurance document access and delivery. Equipped with secure authentication, digital signature verification, and high-quality printing capabilities. Customers can instantly print policies, endorsements, and certificates. The system maintains document integrity with watermarking and secure QR codes, while offering digital copies via email for paperless options.",
    },
    {
      id: "account-opening",
      name: "Account Opening/Card Issuance",
      description: "Self-service account opening and card issuance.",
      icon: <CardIcon size={24} />,
      category: "KIOSKS",
      subCategory: "FINANCE_SERVICE",
      image: accountopening,
      details: "The Account Opening and Card Issuance Kiosk provides end-to-end account creation and instant card delivery. Features include ID scanning, biometric verification, digital signature capture, and immediate debit card printing. Supports multiple account types, KYC verification, and instant activation. The system includes video KYC options and secure document upload capabilities for complete digital onboarding.",
    },

    // KIOSKS Products - Healthcare
    {
      id: "registration-kiosk",
      name: "Registration Kiosk",
      description: "Patient registration and appointment management.",
      icon: <Users size={24} />,
      category: "KIOSKS",
      subCategory: "HEALTHCARE",
      image: registration,
      details: "Our Healthcare Registration Kiosk streamlines patient intake and appointment management in medical facilities. Features include digital form filling, insurance card scanning, ID verification, and appointment scheduling. The system integrates with hospital management software, maintains electronic health records, and provides wait time estimates. Enhanced with multi-language support and accessibility features for all patients.",
    },
    {
      id: "payment-kiosk-healthcare",
      name: "Payment Kiosk",
      description: "Healthcare payment processing solution.",
      icon: <CreditCard size={24} />,
      category: "KIOSKS",
      subCategory: "HEALTHCARE",
      image: healthcarepayment,
      details: "The Healthcare Payment Kiosk simplifies medical bill payments and insurance processing. Supports multiple payment methods, insurance card scanning, and co-payment calculations. Features include itemized bill printing, payment plan setup, and insurance claim status checking. The system provides digital receipts, HSA/FSA card processing, and secure payment processing integrated with healthcare billing systems.",
    },
    {
      id: "report-kiosk-healthcare",
      name: "Report Printing Kiosk",
      description: "Medical report and prescription printing.",
      icon: <FileText size={24} />,
      category: "KIOSKS",
      subCategory: "HEALTHCARE",
      image: healthcarereport,
      details: "Our Medical Report Printing Kiosk provides secure access to medical records and test results. Features include authenticated access, digital signature verification, and high-quality printing of lab reports, prescriptions, and medical certificates. The system maintains patient confidentiality with secure login options, audit trails, and HIPAA compliance. Supports digital sharing options and integration with hospital information systems.",
    },

    // KIOSKS Products - Retail
    {
      id: "self-checkout",
      name: "Self-checkout Kiosk",
      description: "Complete self-checkout solution for retail.",
      icon: <ShoppingCart size={24} />,
      category: "KIOSKS",
      subCategory: "RETAIL",
      image: selfcheckout,
      details: "Our Self-Checkout Kiosk revolutionizes retail transactions with comprehensive self-service capabilities. Features include barcode scanning, weight verification, multiple payment options, and receipt printing. The system supports loyalty programs, digital coupons, and promotional offers. Enhanced with anti-theft measures, age verification for restricted items, and integration with inventory management systems.",
    },
    {
      id: "payments-kiosk",
      name: "Payments Kiosk",
      description: "Interactive self-ordering system.",
      icon: <CreditCard size={24} />,
      category: "KIOSKS",
      subCategory: "RETAIL",
      image: paymentskiosk,
      details: "The Retail Payment Kiosk offers versatile payment processing for modern retail environments. Supports contactless payments, mobile wallets, and traditional card transactions. Features include split payment options, loyalty point redemption, and gift card processing. The system provides real-time transaction reporting, automated reconciliation, and integration with major payment networks.",
    },
    {
      id: "self-ordering",
      name: "Self Ordering Kiosk",
      description: "Interactive self-ordering system.",
      icon: <Monitor size={24} />,
      category: "KIOSKS",
      subCategory: "RETAIL",
      image: selfordering,
      details: "Our Self-Ordering Kiosk enhances customer experience with intuitive ordering interfaces. Features include customizable menu displays, nutritional information, allergen alerts, and order customization options. The system supports multi-language ordering, combo meal suggestions, and promotional upselling. Integrated with kitchen display systems and inventory management for seamless operation.",
    },
    {
      id: "pre-order",
      name: "Pre-order Kiosk",
      description: "Advance ordering and payment solution.",
      icon: <Clock size={24} />,
      category: "KIOSKS",
      subCategory: "RETAIL",
      image: preorder,
      details: "The Pre-Order Kiosk system enables customers to place and pay for orders in advance. Features include scheduled pickup times, order customization, and advance payment processing. The system sends order confirmations via SMS/email, supports order modification, and provides real-time status updates. Enhanced with queue management and integration with order fulfillment systems.",
    },

    // KIOSKS Products - Government
    {
      id: "judiciary-kiosk",
      name: "Judiciary Kiosk",
      description: "Legal information and service access point.",
      icon: <Building2 size={24} />,
      category: "KIOSKS",
      subCategory: "GOVERNMENT",
      image: judiciary,
      details: "Our Judiciary Kiosk provides citizens with easy access to legal services and information. Features include case status checking, court schedule viewing, and document filing capabilities. The system offers secure authentication, digital document submission, and court fee payments. Enhanced with legal document templates, lawyer directory access, and multi-language support for improved accessibility.",
    },
    {
      id: "smart-city",
      name: "Smart City Kiosk",
      description: "Urban services and information hub.",
      icon: <Landmark size={24} />,
      category: "KIOSKS",
      subCategory: "GOVERNMENT",
      image: smartcity,
      details: "The Smart City Kiosk serves as a comprehensive urban information and service hub. Features include city maps, public transport information, emergency services contact, and civic service applications. The system provides real-time updates on city events, weather alerts, and air quality indices. Supports municipal tax payments, permit applications, and citizen feedback submission.",
    },
    {
      id: "bill-payment",
      name: "Bill Payment Kiosk",
      description: "Utility and government bill payment solution.",
      icon: <Receipt size={24} />,
      category: "KIOSKS",
      subCategory: "GOVERNMENT",
      image: billpayment,
      details: "Our Bill Payment Kiosk simplifies utility and government payment processing. Features include multiple utility bill payments, tax payments, and fine settlements. The system supports various payment methods, provides instant receipts, and maintains payment histories. Enhanced with bill validation, partial payment options, and automatic payment reminders.",
    },
    {
      id: "land-record",
      name: "Land Record Kiosk",
      description: "Land record access and certificate printing.",
      icon: <FileText size={24} />,
      category: "KIOSKS",
      subCategory: "GOVERNMENT",
      image: landrecord,
      details: "The Land Record Kiosk provides citizens with secure access to property and land documentation. Features include property record searches, ownership certificate printing, and tax assessment information. The system supports digital map viewing, mutation status tracking, and secure document verification. Enhanced with historical record access and integration with land registration systems.",
    },
    {
      id: "ticket-vending",
      name: "Ticket Vending Kiosk",
      description: "Automated ticket vending for various services.",
      icon: <Ticket size={24} />,
      category: "KIOSKS",
      subCategory: "GOVERNMENT",
      image: ticketvending,
      details: "Our Ticket Vending Kiosk streamlines ticket distribution for government services and events. Features include multiple ticket types, scheduled appointment booking, and instant printing. The system supports QR code generation, digital ticket delivery, and queue management. Enhanced with real-time availability updates and integration with event management systems.",
    },

    // SOLUTIONS Products
    {
      id: "s8",
      name: "S8 Platform",
      description: "Advanced enterprise software platform.",
      icon: <Server size={24} />,
      category: "SOLUTIONS",
      image: s8platform,
      details: "The S8 Platform is our flagship enterprise software solution designed for modern business needs. This comprehensive platform offers modular architecture, scalable deployment options, and robust security features. It includes real-time analytics, automated workflow management, and seamless third-party integrations. The platform supports multi-tenant architecture, provides detailed audit trails, and offers customizable reporting tools for enhanced business intelligence.",
    },
    {
      id: "invos",
      name: "INVOS",
      description: "Intelligent network visualization and operations system.",
      icon: <BarChart size={24} />,
      category: "SOLUTIONS",
      image: invos,
      details: "INVOS delivers advanced network monitoring and visualization capabilities for complex IT infrastructures. Features include real-time network mapping, performance monitoring, and predictive maintenance alerts. The system provides detailed analytics, automated issue resolution, and customizable dashboards. Enhanced with AI-driven insights, security threat detection, and comprehensive reporting tools.",
    },
    {
      id: "middleware",
      name: "Middleware Solutions",
      description: "Enterprise application integration platform.",
      icon: <Cog size={24} />,
      category: "SOLUTIONS",
      image: middleware,
      details: "Our Middleware Solutions enable seamless integration between diverse enterprise applications and systems. Features include API management, data transformation, and message queuing capabilities. The platform supports multiple protocols, provides robust error handling, and ensures reliable message delivery. Enhanced with monitoring tools, scalable architecture, and comprehensive security features.",
    },
    {
      id: "qms",
      name: "QMS",
      description: "Queue Management System",
      icon: <Users2 size={24} />,
      category: "SOLUTIONS",
      image: qms,
      details: "The Queue Management System optimizes customer flow and service delivery in various environments. Features include multi-counter support, priority queuing, and real-time wait time estimates. The system provides detailed analytics, staff performance monitoring, and customer feedback collection. Enhanced with mobile queue updates, appointment scheduling, and integration with digital signage systems.",
    },
    {
      id: "custom-software",
      name: "Customized Software Solutions",
      description: "Tailored software development services.",
      icon: <Code size={24} />,
      category: "SOLUTIONS",
      image: customsoftware,
      details: "Our Custom Software Development service delivers tailored solutions for unique business requirements. We offer end-to-end development services including requirement analysis, design, development, testing, and deployment. Our solutions incorporate modern technologies, follow best practices in security and scalability, and provide ongoing support and maintenance. Enhanced with agile development methodology and comprehensive documentation.",
    },

    // SERVICES Products
    // {
    //   id: "digital-banking",
    //   name: "Digital Banking Unit",
    //   description:
    //     "Complete digital banking solution for modern financial institutions.",
    //   icon: <CreditCard size={24} />,
    //   category: "SERVICES",
    //   image:
    //     digitalbanking,
    //   details:
    //     "The Digital Banking Unit is a comprehensive solution that transforms traditional banking operations into seamless digital experiences. It includes account management, fund transfers, bill payments, loan applications, investment services, and personalized financial insights—all accessible through intuitive interfaces designed for maximum security and user satisfaction.",
    // },
    // {
    //   id: "transport-kiosk",
    //   name: "Transport Kiosk",
    //   description: "Self-service kiosks for transportation hubs and services streamlining passenger experiences.",
    //   icon: <Train size={24} />,
    //   category: "SERVICES",
    //   image:
    //     transportkiosk,
    //   details:
    //     "Our Transport Kiosks streamline passenger experiences at airports, train stations, and bus terminals. These kiosks enable ticket purchasing, seat selection, boarding pass printing, route information, and schedule updates. Advanced features include biometric verification, contactless payments, and integration with transportation management systems.",
    // },
    // {
    //   id: "consultative-kiosk",
    //   name: "Consultative Kiosk",
    //   description: "Interactive kiosks for customer consultation and service with personalized assistance.",
    //   icon: <Users size={24} />,
    //   category: "SERVICES",
    //   image:
    //     consultativekiosk,
    //   details:
    //     "Consultative Kiosks bridge the gap between self-service and personalized assistance through video conferencing with remote experts. These kiosks feature high-definition video, document scanning and sharing capabilities, electronic signature collection, and secure transaction processing—ideal for complex financial services, healthcare consultations, and government services.",
    // },
    // {
    //   id: "banking-kiosk",
    //   name: "Banking Kiosk",
    //   description:
    //     "Comprehensive banking services in a self-service kiosk format.",
    //   icon: <Building size={24} />,
    //   category: "SERVICES",
    //   image:
    //     bankingkiosk,
    //   details:
    //     "Our Banking Kiosks deliver a full range of financial services without requiring teller assistance. Features include account opening, cash/check deposits, withdrawals, fund transfers, loan applications, card issuance, and account management. These kiosks extend banking services beyond traditional hours and locations while maintaining the highest security standards.",
    // },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) => {
      if (product.category === "KIOSKS") {
        return product.category === activeCategory && product.subCategory === activeBankingSubCategory;
      }
      return product.category === activeCategory;
    }
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
          defaultValue="KIOSKS"
          className="w-full"
          onValueChange={(value) => setActiveCategory(value as any)}
        >
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-300 h-100">
              <TabsTrigger
                value="KIOSKS"
                className="text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-colors duration-300 py-3 data-[state=active]:text-red-600"
              >
                KIOSKS
              </TabsTrigger>
              <TabsTrigger
                value="SOLUTIONS"
                className="text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-colors duration-300 py-3 data-[state=active]:text-red-600"
              >
                SOLUTIONS
              </TabsTrigger>
              <TabsTrigger
                value="SERVICES"
                className="text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-colors duration-300 py-3 data-[state=active]:text-red-600"
              >
                SERVICES
              </TabsTrigger>
            </TabsList>
          </div>

          {/* KIOSKS Sub-categories */}
          {activeCategory === "KIOSKS" && (
            <Tabs
              value={activeBankingSubCategory}
              className="mb-8"
              onValueChange={setActiveBankingSubCategory}
            >
              <TabsList className="flex justify-center space-x-2 bg-transparent">
                <TabsTrigger
                  value="FINANCE_SERVICE"
                  className="px-4 py-2 rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white bg-gray-200 text-gray-700"
                >
                  Finance Service
                </TabsTrigger>
                <TabsTrigger
                  value="HEALTHCARE"
                  className="px-4 py-2 rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white bg-gray-200 text-gray-700"
                >
                  Healthcare
                </TabsTrigger>
                <TabsTrigger
                  value="RETAIL"
                  className="px-4 py-2 rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white bg-gray-200 text-gray-700"
                >
                  Retail
                </TabsTrigger>
                <TabsTrigger
                  value="GOVERNMENT"
                  className="px-4 py-2 rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white bg-gray-200 text-gray-700"
                >
                  Government
                </TabsTrigger>
              </TabsList>
            </Tabs>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory === "SERVICES" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Our Service Coverage
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Check if our services are available in your area and explore our coverage across India
                    </p>
                  </div>
                  <ServicesMap />
                </motion.div>
              ) : (
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
              )}
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
