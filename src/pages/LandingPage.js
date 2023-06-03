import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Industry from '../components/Industry';
import Services from '../components/Services';
import Story from '../components/Story';
import Resource from '../components/Resource';
import Counter from '../components/Counter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div>
      <Hero />
      <Header />
      <Story />
      <Counter />
      <Services />
      <Industry />
      <Contact />
      <Resource />
      <Footer />
    </div>
  );
}

export default LandingPage;
