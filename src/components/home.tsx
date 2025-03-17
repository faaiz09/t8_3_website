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
import ScrollToTop from "./ScrollToTop";
import { SEO } from "./SEO";
import { OrganizationJsonLd, WebPageJsonLd } from "./JsonLd";
import canara from "../assets/img/canara.png";
import hdfc from "../assets/img/hdfc.png";
import icici from "../assets/img/icici.png";
import axis from "../assets/img/axis.png";

interface BankLogo {
  name: string;
  src: string;
  alt: string;
}

const Home: React.FC = () => {
  const handleHeroCtaClick = (): void => {
    // Smooth scroll to products section
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Custom bank logos
  const bankLogos: BankLogo[] = [
    {
      name: "HDFC Bank",
      src: hdfc,
      alt: "HDFC Bank - Leading Private Sector Bank in India",
    },
    {
      name: "ICICI Bank",
      src: icici,
      alt: "ICICI Bank - Major Indian Multinational Banking and Financial Services Company",
    },
    {
      name: "Axis Bank",
      src: axis,
      alt: "Axis Bank - Third Largest Private Sector Bank in India",
    },
    {
      name: "Canara Bank",
      src: canara,
      alt: "Canara Bank - One of the Largest Public Sector Banks in India",
    },
  ];

  const siteUrl = window.location.origin;
  const pageTitle = "T8 - Digital Kiosk & Automation Solutions";
  const pageDescription = "T8 provides cutting-edge digital kiosk solutions and automation services for modern banking needs. Transform your banking experience with our innovative technology.";

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="digital kiosk, banking automation, self-service kiosk, banking solutions, fintech, HDFC Bank, ICICI Bank, Axis Bank, Canara Bank"
        ogImage="/og-image.jpg"
      />

      <OrganizationJsonLd
        name="T8"
        logo={`${siteUrl}/logo.png`}
        url={siteUrl}
        description="T8 is a leading provider of digital kiosk solutions and automation services for modern banking needs."
      />

      <WebPageJsonLd
        title={pageTitle}
        description={pageDescription}
        url={siteUrl}
        organizationName="T8"
      />

      <div className="w-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <header>
          <Navbar />
        </header>

        <main>
          {/* Hero Section */}
          <section aria-label="Hero">
            <HeroSection
              title="A Digital Kiosk & Automation Company"
              // subtitle="with Seamless transactions anytime, anywhere, with preferred payment modes on cutting-edge platforms."
              ctaText="Explore Our Solutions"
              onCtaClick={handleHeroCtaClick}
            />
          </section>

          {/* About Section */}
          <section aria-label="About Us">
            <AboutSection />
          </section>

          {/* Products Section */}
          <section id="products" aria-label="Our Products">
            <ProductsSection />
          </section>

          {/* Clients Section */}
          <section aria-label="Our Clients">
            <ClientsSection />
          </section>

          {/* Services Section */}
          <section aria-label="Our Services">
            <ServicesSection />
          </section>

          {/* Client Logo Slider */}
          {/* <ClientLogoSlider logos={bankLogos} /> */}

          {/* Contact Section */}
          <section aria-label="Contact Us">
            <ContactSection />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>

        {/* Scroll to Top Button with Progress Indicator */}
        <ScrollToTop showBelow={300} />
      </div>
    </>
  );
};

export default Home;
