import React from "react";
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
  return (
    <div>
    <Helmet>
        <title>Honest Digital Services | Product Development Agency </title>
        <meta property="og:title" content="Honest Digital Services | Product Development Agency"/>
        <meta property="og:type" content=""/>
        <meta property="og:description" content="Honest Digital Services | Product Development Agency"/>
        <meta
          name="description"
          content="Helping businesses create digital products. We specialize in creating taiored web and mobile app development, branding & content creation and packaing & industrial design."
        />
        <meta
          name="keywords"
          content=""
        ></meta>
        <meta name="author" content="Karthik Nath"></meta>
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
