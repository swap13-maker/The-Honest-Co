import React from 'react';
import { Helmet } from 'react-helmet';

const BreadcrumbSchema = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "description": "We are a community of digital creators who make really cool products for business that help them succeed.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Portfolio",
        "item": "https://thehonestco.in/portfolio",
        "description": "Our portfolio of digital solutions created for businesses all across the world."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources",
        "item": "https://thehonestco.in/resources",
        "description": "Our tools and techniques used by our team for project execution."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Share Your Requirements",
        "item": "https://thehonestco.in/get-in-touch/customer-inquiry",
        "description": "Need for digital development? Reach out to us here."
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
