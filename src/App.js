import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerContact from './pages/CustomerContact';
import CreatorContact from './pages/CreatorContact';
import Portfolio from './pages/Portfolio.js';
import Resource from './pages/Resource.js';
import Project1 from './components/Portfolio/Project1.js';
import Article1 from './components/Articles/Article1.js';
import Article2 from './components/Articles/Article2';
import Article3 from './components/Articles/Article3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-in-touch" element={<CustomerContact />} />
        <Route path="/get-in-touch/creator" element={<CreatorContact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/portfolio/project1" element={<Project1 />} />
        <Route path="/resources/articles/article1" element={<Article1 />} />
        <Route path="/resources/articles/article2" element={<Article2 />} />
        <Route path="/resources/articles/article3" element={<Article3 />} />

      </Routes>
    </Router>
  );
}

export default App;

