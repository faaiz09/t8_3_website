import React from 'react';

interface OrganizationJsonLdProps {
  name: string;
  logo: string;
  url: string;
  description: string;
}

interface WebPageJsonLdProps {
  title: string;
  description: string;
  url: string;
  organizationName: string;
}

export const OrganizationJsonLd: React.FC<OrganizationJsonLdProps> = ({
  name,
  logo,
  url,
  description,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    logo,
    url,
    description,
    sameAs: [
      'https://www.linkedin.com/company/t8',
      'https://twitter.com/t8',
      // Add other social media URLs
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const WebPageJsonLd: React.FC<WebPageJsonLdProps> = ({
  title,
  description,
  url,
  organizationName,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: organizationName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}; 