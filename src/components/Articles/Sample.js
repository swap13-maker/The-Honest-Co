import React, { useRef, useEffect } from 'react';
import ScrollHighlightNabbar from './ScrollHighlightNavbar.js';
import './../../App.css';
import InnerHeader from '../InnerHeader.js';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';
import {
  Article32B1a,
  Article32B1b,
  Article32B1c,
  Article32Banner,
} from './Constant.js';
import Banner from '../../images/Article/Article42/Banner.webp';
import B1a from '../../images/Article/Article42/b1.webp';
import B1b from '../../images/Article/Article42/b2.webp';
// import B1c from '../../images/Article/Article42/b3.webp';
import './Article.css';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import Arrow from '../../images/Arrow.json';
import GoogleTagManager from '../../GoogleTagManager.js';
import ChatComponent from '../ChatComponent.js';

export default function ArticleSam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const info = {
    title: '',
    url: '',
    detailTitle: '',
    date: '',
    service: '',
    industry: '',
    description: '',
  };

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();

  const navHeader = [
    {
      headerTitle: 'Enhancing Customer Experience',
      headerRef: section1Ref,
      headerID: 'section1',
    },
    {
      headerTitle: 'Elements of User-Centric Design',
      headerRef: section2Ref,
      headerID: 'section2',
    },
    {
      headerTitle: 'Case Study: Remittance Platforms',
      headerRef: section3Ref,
      headerID: 'section3',
    },
    {
      headerTitle: 'Best Practices for Designing',
      headerRef: section4Ref,
      headerID: 'section4',
    },
    {
      headerTitle: 'Future Trends in Tech Solutions',
      headerRef: section5Ref,
      headerID: 'section5',
    },
  ];

  return (
    <section>
      {/* Header */}
      <InnerHeader />
      {/* mian content */}
      <Helmet>
        <title>{info.title}</title>
        <GoogleTagManager />
        <meta name="description" content={info.description} />
        <meta
          name="keywords"
          content="education in patient care health education resources personalizing health education patient outcomes leveraging technology for interactive learning"
        ></meta>
        <meta
          property="og:image"
          content="http://www.thehonestco.in/static/media/Article1.6bd756733d9fbd04e9fb.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content={info.description}></meta>
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        ></meta>
        <meta property="og:title" content={info.title} />
        <meta name="author" content="Karthik Nath"></meta>
      </Helmet>
      <section className="container main-container">
        <div className="">
          <ul className="breadcrumb-navigation pt-7">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li className="current">{info.url}</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 text-align-center">
                <div>
                  <h1 className="article-heading">{info.detailTitle}</h1>
                </div>
                <div className="article-sub-heading pt-4">
                  <h2 className="px-2">{info.date}</h2> &bull;{' '}
                  <h2 className="px-2">{info.service}</h2> &bull;{' '}
                  <h2 className="px-2">{info.industry}</h2>
                </div>
                <img
                  src={Banner}
                  className="w-100 pt-4 pt-md-5"
                  alt={Article32Banner}
                />
              </div>

              <div className="col-md-9">
                {/* section 1 */}
                <div className="pt-4 pt-md-5" ref={section1Ref} id="section1">
                  <h2 className="main-article-content">title</h2>
                  <p className="light-article-content mb-3">Para1</p>
                  <p className="light-article-content mb-3">Para2</p>
                  <p className="light-article-content mb-0">Para3</p>
                </div>
                {/* section 2 */}
                <div className="pt-4 pt-md-5" ref={section2Ref} id="section2">
                  <h2 className="main-article-content">title</h2>
                  <p className="light-article-content">
                    PRM (Patient Relationship Management) systems can integrate
                    a variety of tools to gather patient feedback effectively:
                  </p>
                  <ul className="light-article-content mb-0 pb-0">
                    <li className="mb-2">
                      <strong>Online Surveys:</strong> Web-based.
                    </li>
                    <li className="mb-2">
                      <strong>Automated Phone Surveys:</strong> Voice-activated
                    </li>
                    <li>
                      <strong>SMS Surveys:</strong> Text message
                    </li>
                  </ul>
                  <img
                    src={B1a}
                    className="w-100 pt-4 pt-md-5"
                    alt={Article32B1a}
                  />
                </div>
                {/* section 3 */}
                <div className="pt-4 pt-md-5" ref={section3Ref} id="section3">
                  <h2 className="main-article-content">Title</h2>

                  <p className="light-article-content mb-3">
                    Creating effective surveys involves several key
                    considerations:
                  </p>

                  <ul className="light-article-content mb-0 pb-0">
                    <li className="mb-2">
                      <strong>Online Surveys:</strong> Web-based.
                    </li>
                    <li className="mb-2">
                      <strong>Automated Phone Surveys:</strong> Voice-activated
                    </li>
                    <li>
                      <strong>SMS Surveys:</strong> Text message
                    </li>
                  </ul>
                </div>
                {/* section 4 */}
                <div className="pt-4 pt-md-5" ref={section4Ref} id="section4">
                  <h2 className="main-article-content">title</h2>

                  <p className="light-article-content mb-0">Par1.</p>
                </div>

                <div className="pt-4 pt-md-5" ref={section5Ref} id="section5">
                  <h2 className="main-article-content">title</h2>
                  <p className="light-article-content mb-3">
                    Creating a feedback loop involves:
                  </p>
                  <ul className="light-article-content mb-0 pb-0">
                    <li className="mb-2">
                      <strong>Online Surveys:</strong> Web-based.
                    </li>
                    <li className="mb-2">
                      <strong>Automated Phone Surveys:</strong> Voice-activated
                    </li>
                    <li>
                      <strong>SMS Surveys:</strong> Text message
                    </li>
                  </ul>
                  <img
                    src={B1b}
                    className="w-100 pt-4 pt-md-5"
                    alt={Article32B1b}
                  />
                </div>

                <div className="pt-4 pt-md-5" ref={section6Ref} id="section6">
                  <h2 className="main-article-content">title</h2>

                  <p className="light-article-content mb-3">para1</p>
                  <p className="light-article-content mb-0">para2</p>
                </div>

                <br />
                <br />
              </div>

              <div className="col-md-3 pt-5 pl-md-5">
                <div className="bg-white sticky-top sticky-top-with-padding">
                  <div className="p-4 d-none d-md-block">
                    <div className="Side_border-top"></div>
                    <div className="border-right"></div>
                    <ScrollHighlightNabbar
                      section1Ref={section1Ref}
                      navHeader={navHeader}
                      className="sticky-top"
                    />
                    <div className="border-left"></div>
                    <div className="Side_border-bottom"></div>
                  </div>
                  <div className="p-4 mt-5 bg-white d-none d-md-block">
                    <div className="Side_border-top"></div>
                    <div className="box-bottom-right"></div>
                    <div className="side-article-heading">
                      Want to build one for yourself?
                    </div>
                    <div className="side-article-subheading pt-3">
                      Let us help you with your dream project, click below to
                      send us your requirements.
                    </div>
                    <Link to="/get-in-touch/customer-inquiry">
                      <div className="side-article-download pt-3">
                        Get In Touch
                        <div
                          className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                          style={{ marginLeft: '100px', marginTop: '-22px' }}
                        >
                          <Lottie
                            animationData={Arrow}
                            autoplay
                            loop
                            className="w-xs-100 w-md-12 ArticlelottioArrow"
                          />
                        </div>
                        <div className="box-bottom-left"></div>
                        <div className="Side_border-bottom"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatComponent />
    </section>
  );
}
