import React from 'react';
import Header from './Header';

function Hero() {
  return (
    <section id="hero">
    <Header />
      <div className="overlay">
        <h1>Welcome to our website</h1>
        <p>Learn more about our services and how we can help you.</p>
        <a href="#services">Learn More</a>
      </div>
    </section>
  );
}

export default Hero;
