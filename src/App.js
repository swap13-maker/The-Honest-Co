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
import Project2 from './components/Portfolio/Project2.js';


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
        <Route path="/portfolio/project2" element={<Project2 />} />
        <Route path="/resources/articles/global-commerce-remittance-mobile-applications-business-expansion" element={<Article1 />} />
        <Route path="/resources/articles/artificial-intelligence-machine-learning-crypto-trading-bot" element={<Article2 />} />
        <Route path="/resources/articles/leveraging-ai-ml-models-farmers-early-detect-plant-diseases" element={<Article3 />} />
        <Route path="/resources/articles/simplifying-ecommerce-store-creation-low-code-platforms" element={<Article4 />} />
        <Route path="/resources/articles/optimizing-forecasting-customer-targeting-ai-ml-solutions" element={<Article5 />} />
        <Route path="/resources/articles/comprehensive-preschool-mobile-application-parental-tracking-transits" element={<Article6 />} />
        <Route path="/resources/articles/curating-adaptive-course-modules-deep-learning-algorithms" element={<Article7 />} />
        <Route path="/resources/articles/contract-management-modules-automating-contracts-custom-app-development" element={<Article8 />} />
        <Route path="/resources/articles/modernizing-interview-scheduling-mobile-apps-enhancing-team-efficiency-applicant-experience" element={<Article9 />} />
        <Route path="/resources/articles/machine-learning-models-streamlining-application-filterization-shortlisting-hr-operations" element={<Article10 />} />
        <Route path="/resources/articles/custom-crm-development-ecommerce-industries-businesses" element={<Article11 />} />
        <Route path="/resources/articles/effective-route-planning-fleet-management-airiticifal-intelligence-models" element={<Article12 />} />
        <Route path="/thankyou" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;

