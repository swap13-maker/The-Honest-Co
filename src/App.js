import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerContact from './pages/CustomerContact';
import CreatorContact from './pages/CreatorContact';
import Portfolio from './pages/Portfolio.js';
import Resource from './pages/Resource.js';
import Thanks from './pages/Thanks.js';
import NotFound from './pages/NotFound.js';
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
import Article13 from './components/Articles/Article13.js';
import Project2 from './components/Portfolio/Project2.js';
import Project3 from './components/Portfolio/Project3.js';
import Project4 from './components/Portfolio/Project4.js';
import Project5 from './components/Portfolio/Project5.js';
import Project6 from './components/Portfolio/Project6';
import Project8 from './components/Portfolio/Project8';
import Project9 from './components/Portfolio/Project9';
import { Helmet } from "react-helmet";
import Article14 from './components/Articles/Article14.js';
import Article15 from './components/Articles/Article15.js';
import Article16 from './components/Articles/Article16.js';
import Article17 from './components/Articles/Article17.js';
import Article18 from './components/Articles/Article18.js';
import Article19 from './components/Articles/Article19.js';
import Article20 from './components/Articles/Article20.js';
import Article21 from './components/Articles/Article21.js';
import Article22 from './components/Articles/Article22.js';
import Article23 from './components/Articles/Article23.js';
import Article24 from './components/Articles/Article24.js';
import Article25 from './components/Articles/Article25.js';
import Article26 from './components/Articles/Article26.js';
import Article27 from './components/Articles/Article27.js';
import Article28 from './components/Articles/Article28.js';
import Article29 from './components/Articles/Article29.js';
import GoogleTagManager from './GoogleTagManager.js';
import Article30 from './components/Articles/Article30.js';


function App() {
  return (
    <>
      <Helmet>
        <GoogleTagManager />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0S7PV44D7"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q0S7PV44D7');
          `}
        </script>
      </Helmet>
      <Router>
      <GoogleTagManager />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/get-in-touch/customer-inquiry" element={<CustomerContact />} />
          <Route path="/get-in-touch/creator-inquiry" element={<CreatorContact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/portfolio/online-d2c-ecommerce-store" element={<Project1 />} />
          <Route path="/portfolio/p2p-money-remittance-mobile-application" element={<Project2 />} />
          <Route path="/portfolio/cab-hailing-travel-itinerary-platform" element={<Project3 />} />
          <Route path="/portfolio/location-sharing-sos-notifications-mobile-app" element={<Project4 />} />
          <Route path="/portfolio/pill-reminder-doctor-appointment-platform" element={<Project5 />} />
          <Route path="/portfolio/photo-sharing-online-ecommerce-platform" element={<Project6 />} />
          <Route path="/portfolio/interview-scheduling-job-tracking-app" element={<Project8 />} />
          <Route path="/portfolio/custom-school-learning-management-platform" element={<Project9 />} />
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
          <Route path="/resources/articles/digital-transformation-and-development-in-middle-eastern-healthcare" element={<Article13 />}/>
          <Route path="/resources/articles/custom-solutions-for-cultural-sensitivity-in-health-tech" element={<Article14/>}/>
          <Route path="/resources/articles/simplifying-payments-with-bespoke-prm-solutions" element={<Article15/>}/>
          <Route path="/resources/articles/mental-health-support-through-messaging-platforms" element={<Article16 />} />
          <Route path="/resources/articles/Digital-Transformation-Trends-in-BFSI-for-2024" element={<Article17 />} />
          <Route path="/resources/articles/AI-in-Application-Development-for-BFSI-Businesses" element={<Article18 />} />
          <Route path="/resources/articles/Customer-Centric-Digitization-End-User-Personalized-Experiences" element={<Article19 />} />
          <Route path="/resources/articles/Digital-Transformation-&-Business-Processes-Automation-in-Banking-&-Finance" element={<Article20 />} />
          <Route path="/resources/articles/AI-driven-Talent-Screening-Revolutionizing-Recruitment" element={<Article21 />} />
          <Route path="/resources/articles/Enhancing-Trust-and-Security-in-Staffing-through-Blockchain" element={<Article22 />} />
          <Route path="/resources/articles/Rethinking-Candidate-Assessment" element={<Article23 />} />
          <Route path="/resources/articles/Streamlining-Hiring-Through-Automated-Candidate-Screening" element={<Article24 />} />
          <Route path="/resources/articles/Virtual-Career-Fairs-Expanding-Access-to-Opportunities" element={<Article25 />} />
          <Route path="/resources/articles/Exploring-the-Potential-of-Student-Information-Systems" element={<Article26 />} />
          <Route path="/resources/articles/Enhancing-Engagement-Via-Dynamic-Virtual-Learning-Environments" element={<Article27 />} />
          <Route path="/resources/articles/Financial-Transparency-in-Education-Via-Custom-Software-Solutions" element={<Article28 />} />
          <Route path="/resources/articles/The-Rise-of-Course-Management-&-Scheduling-Tools" element={<Article29 />} />
          <Route path="/resources/articles/Harnessing-the-Power-of-Adaptive-Learning-Platforms" element={<Article30 />} />
          <Route path="/thankyou" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

