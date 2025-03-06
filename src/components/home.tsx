import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import ClientsSection from "./ClientsSection";
// import ClientLogoSlider from "./ClientLogoSlider";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import canara from "../assets/img/canara.png";
import hdfc from "../assets/img/hdfc.png";
import icici from "../assets/img/icici.png";
import axis from "../assets/img/axis.png";

function Home() {
  const handleHeroCtaClick = () => {
    // Smooth scroll to products section
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Custom bank logos
  const bankLogos = [
    {
      name: "HDFC Bank",
      src: hdfc,
      alt: "HDFC Bank Logo",
    },
    {
      name: "ICICI Bank",
      src: icici,
      alt: "ICICI Bank Logo",
    },
    {
      name: "Axis Bank",
      src: axis,
      alt: "Axis Bank Logo",
    },
    {
      name: "Canara Bank",
      src: canara,
      alt: "Canara Bank Logo",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="A Digital Kiosk & Automation Company"
        // subtitle="with Seamless transactions anytime, anywhere, with preferred payment modes on cutting-edge platforms."
        ctaText="Explore Our Solutions"
        onCtaClick={handleHeroCtaClick}
      />

      {/* About Section */}
      <AboutSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Client Logo Slider */}
      {/* <ClientLogoSlider logos={bankLogos} /> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer with Modal Triggers */}
      <Footer />
    </div>
  );
}

export default Home;
