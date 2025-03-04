import React from "react";
import HeroSection from "./HeroSection";
import SolutionsShowcase from "./SolutionsShowcase";
import ClientLogoSlider from "./ClientLogoSlider";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { Code, Terminal } from "lucide-react";
import canara from "../assets/img/canara.png";
import hdfc from "../assets/img/hdfc.png"; 
import icici from "../assets/img/icici.png";
import axis from "../assets/img/axis.png";

function Home() {
  const handleHeroCtaClick = () => {
    // Smooth scroll to solutions section
    const solutionsSection = document.getElementById("solutions");
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: "smooth" });
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
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Revolutionizing Banking"
        subtitle="with Intelligent Software & Kiosks"
        ctaText="Explore Solutions"
        onCtaClick={handleHeroCtaClick}
      />

      {/* Solutions Showcase */}
      <div id="solutions">
        <SolutionsShowcase
          title="Our Solutions"
          subtitle="Innovative banking technology for the modern financial world"
          solutions={[
            {
              title: "Banking Software",
              description:
                "Modern banking solutions for financial institutions",
              icon: <Code className="h-8 w-8" />,
              details:
                "Our banking software solutions are designed to streamline operations, enhance security, and improve customer experience for financial institutions of all sizes.",
              features: [
                "Core banking systems",
                "Mobile banking applications",
                "Payment processing solutions",
                "Fraud detection and prevention",
                "Regulatory compliance tools",
              ],
              color: "bg-blue-50",
            },
            {
              title: "Kiosk Solutions",
              description:
                "Self-service banking kiosks for enhanced customer experience",
              icon: <Terminal className="h-8 w-8" />,
              details:
                "Our interactive kiosk solutions provide a seamless self-service experience for banking customers, reducing wait times and operational costs while improving service delivery.",
              features: [
                "Account management kiosks",
                "ATM and cash recycling systems",
                "Customer onboarding terminals",
                "Bill payment stations",
                "Video banking kiosks",
              ],
              color: "bg-purple-50",
            },
          ]}
        />
      </div>

      {/* Client Logo Slider */}
      <ClientLogoSlider logos={bankLogos} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
