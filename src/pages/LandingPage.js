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

function LandingPage() {
  return (
    <div>
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
