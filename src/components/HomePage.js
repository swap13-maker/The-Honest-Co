import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomePage;
