import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Industry from "../components/Industry";
import Services from "../components/Services";
import Work from "../components/Work";
import ServicesMob from "../components/ServicesMob";
import Story from "../components/Story/Story";
import Resource from "../components/Resource";
import Counter from "../components/Counter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatComponent from "../components/ChatComponent";
import { Helmet } from "react-helmet";

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Honest Digital Services | Product Development Agency </title>
        <meta
          property="og:title"
          content="Honest Digital Services | Product Development Agency"
        />
        <meta property="og:type" content="" />
        <meta
          property="og:description"
          content="Honest Digital Services | Product Development Agency"
        />
        <meta
          name="description"
          content="Helping businesses create digital products. We specialize in creating taiored web and mobile app development, branding & content creation and packaing & industrial design."
        />
        <meta name="keywords" content=""></meta>
        <meta name="author" content="Karthik Nath"></meta>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Honest Digital Services Pvt. Ltd.",
            alternateName: "The Honest Company",
            url: "https://thehonestco.in/",
            logo: "https://thehonestco.in/static/media/footer-logo.49d1b979f64f77c501c671e3e76b184b.svg",
            sameAs: [
              "https://www.linkedin.com/company/the-honest-co",
              "https://thehonestco.in/get-in-touch/customer-inquiry",
            ],
          })}
        </script>
      </Helmet>
      <Hero />
      <Header />
      <Story />
      <Services />
      <ServicesMob />
      <Work />
      <Industry />
      <Counter />
      <Contact />
      <Resource />
      <Footer />
      <ChatComponent />
    </div>
  );
}

export default LandingPage;
