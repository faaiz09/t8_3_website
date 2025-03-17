import React from "react";
import CareersPage from "./CareersPage";
import { SEO } from "./SEO";
import { WebPageJsonLd } from "./JsonLd";

const Careers: React.FC = () => {
  const siteUrl = window.location.origin;
  const pageTitle = "Careers at T8 - Join Our Team";
  const pageDescription = "Join T8's innovative team and help shape the future of digital banking solutions. We're looking for talented individuals who are passionate about technology and customer experience.";

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="careers, jobs, employment, digital banking, fintech careers, technology jobs, T8 careers"
        ogImage="/og-image.jpg"
      />

      <WebPageJsonLd
        title={pageTitle}
        description={pageDescription}
        url={`${siteUrl}/careers`}
        organizationName="T8"
      />

      <div className="w-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <header>
          <nav aria-label="Main navigation">
            {/* Add your navigation component here */}
          </nav>
        </header>

        <main>
          <section aria-label="Careers">
            <CareersPage />
          </section>
        </main>

        <footer>
          {/* Add your footer component here */}
        </footer>
      </div>
    </>
  );
};

export default Careers;
