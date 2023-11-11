import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerContact from './pages/CustomerContact';
import CreatorContact from './pages/CreatorContact';
import Portfolio from './pages/Portfolio.js';
import Resource from './pages/Resource.js';
import Thanks from './pages/Thanks.js';
import Project1 from './components/Portfolio/Project1.js';
import Article1 from './components/Articles/Article1.js';
import Article2 from './components/Articles/Article2';
import Article3 from './components/Articles/Article3';
import Article4 from './components/Articles/Article4';
import Article5 from './components/Articles/Article5';
import Article6 from './components/Articles/Article6';
import Article7 from './components/Articles/Article7.js';
import Article8 from './components/Articles/Article8';
import Article9 from './components/Articles/Article9.js';
import Article10 from './components/Articles/Article10.js';
import Article11 from './components/Articles/Article11';
import Article12 from './components/Articles/Article12.js';


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
        <Route path="/resources/articles/article4" element={<Article4 />} />
        <Route path="/resources/articles/article5" element={<Article5 />} />
        <Route path="/resources/articles/article6" element={<Article6 />} />
        <Route path="/resources/articles/article7" element={<Article7 />} />
        <Route path="/resources/articles/article8" element={<Article8 />} />
        <Route path="/resources/articles/article9" element={<Article9 />} />
        <Route path="/resources/articles/article10" element={<Article10 />} />
        <Route path="/resources/articles/article11" element={<Article11 />} />
        <Route path="/resources/articles/article12" element={<Article12 />} />
        <Route path="/thankyou" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;

