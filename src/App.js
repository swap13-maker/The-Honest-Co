import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Industry from './components/Industry';
import Services from './components/Services';
import Story from './components/Story';
import Resource from './components/Resource';
import Counter from './components/Counter';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
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

export default App;
