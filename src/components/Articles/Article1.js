import React, { useRef, useEffect } from "react";
import ScrollHighlightNabbar from "./ScrollHighlightNavbar";
import "./../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import InnerHeader from "../InnerHeader.js";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import article from "../../images/article1.png";
import articleImg1 from "../../images/articleImg1.png";

export default function App() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();

  const navHeader = [
    {
      headerTitle: "Mobile wallets",
      headerRef: section1Ref,
      headerID: "section1",
    },
    {
      headerTitle: "Benefits of mobile wallets",
      headerRef: section2Ref,
      headerID: "section2",
    },
    {
      headerTitle: "Instant Transfers",
      headerRef: section3Ref,
      headerID: "section3",
    },
    {
      headerTitle: "Payments without passwords - biometric authentication",
      headerRef: section4Ref,
      headerID: "section4",
    },
    {
      headerTitle: "The benefits of biometric authentication",
      headerRef: section5Ref,
      headerID: "section5",
    },
    {
      headerTitle: "The rise of mPOS",
      headerRef: section6Ref,
      headerID: "section6",
    },
  ];

  return (
    <section>
      {/* Header */}
      <InnerHeader />
      {/* mian content */}
      <section>
        <div className="container">
          <ul class="breadcrumb-navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li className="current">Articles</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 text-align-center">
                <div className="article-heading">
                  Top Payment Innovations <br /> & Technologies To Watch in 2023
                </div>
                <div className="article-sub-heading pt-4">
                  <span className="px-2">Carthick Nath</span> &bull;{" "}
                  <span className="px-2">Banking & Finance</span> &bull;{" "}
                  <span className="px-2">May 19, 2023</span>
                </div>
                <img src={article} className="w-100 pt-5" />
              </div>

              <div className="col-md-9">
                <div className="pt-5" ref={section1Ref} id="section1">
                  <p className="main-article-content">
                    From mobile wallets to biometric authentication and smart
                    speaker payments, these new technologies are revolutionizing
                    the way people purchase and exchange funds.
                  </p>
                  <p className="light-article-content">
                    The world of payments is constantly evolving, and payment
                    innovations are shaping the future of how we transact. Let’s
                    dive into the top payment innovations and understand what’s
                    driving their growth, as well as their impact on the
                    payments industry.
                  </p>
                  <br />
                  <br />
                  <p className="main-article-content">
                    Mobile wallets: A dominant force
                  </p>
                  <p className="light-article-content">
                    At the end of 2020, there were over 2.8 billion mobile
                    wallets in use, and it is projected this number to increase
                    by nearly 74% over the next five years, to reach 4.8 billion
                    by the end of 2025.
                    <br />
                    Forecasts indicate that the utilisation of applications like
                    Apple Pay or Google Pay in North America is expected to
                    experience a twofold increase between 2020 and 2025.
                    However, it is important to note that Asia's market size
                    will surpass North America's by a significant margin. The
                    aforementioned figures encompass applications like PayPal or
                    Google Wallet, which allow users to store their credit or
                    debit card information on their mobile devices for
                    convenient online or in-store purchases.
                    <br />
                    China has been widely recognised as the global leader in
                    proximity mobile payments, which involve using smartphones
                    for contactless transactions. This distinction can be
                    attributed to the popularity of prominent platforms such as
                    Alipay and Tenpay in the country.
                    <br />
                    <br />
                    According to Statistics study conducted in 2022 across
                    various regions Mobile wallet adoption in 39 countries and
                    territories worldwide:
                    <ul className="pt-4">
                      <li>
                        Asia exhibited significantly higher mobile wallet usage
                        compared to Europe. In fact, out of the top ten
                        countries with the highest mobile wallet adoption rates,
                        nine were located in the Asia-Pacific region, with the
                        top two originating from Southeast Asia.
                      </li>
                      <li>
                        Saudi Arabia was the first non-Asian country to appear
                        on the list, securing the ninth position. It wasn't
                        until the 22nd spot that Sweden, representing Europe,
                        made its appearance in the survey.
                      </li>
                      <li>
                        Unlike in Asia-Pacific and the Middle East, where mobile
                        wallets have gained prominence as the primary digital
                        payment method, Europe and North America face
                        competition from well-established digital payment
                        systems like credit and debit cards.
                      </li>
                      <li>
                        In emerging economies, mobile wallets represent the
                        first introduction to digital payment solutions.
                      </li>
                    </ul>
                  </p>
                  <img src={articleImg1} className="w-100 pt-5" />
                </div>
                <div className="pt-5" ref={section2Ref} id="section2">
                  <p className="main-article-content">
                    Mobile wallets: A dominant force
                  </p>
                  <p className="light-article-content">
                    At the end of 2020, there were over 2.8 billion mobile
                    wallets in use, and it is projected this number to increase
                    by nearly 74% over the next five years, to reach 4.8 billion
                    by the end of 2025.
                    <br />
                    Forecasts indicate that the utilisation of applications like
                    Apple Pay or Google Pay in North America is expected to
                    experience a twofold increase between 2020 and 2025.
                    However, it is important to note that Asia's market size
                    will surpass North America's by a significant margin. The
                    aforementioned figures encompass applications like PayPal or
                    Google Wallet, which allow users to store their credit or
                    debit card information on their mobile devices for
                    convenient online or in-store purchases.
                    <br />
                    China has been widely recognised as the global leader in
                    proximity mobile payments, which involve using smartphones
                    for contactless transactions. This distinction can be
                    attributed to the popularity of prominent platforms such as
                    Alipay and Tenpay in the country.
                    <br />
                    <br />
                    According to Statistics study conducted in 2022 across
                    various regions Mobile wallet adoption in 39 countries and
                    territories worldwide:
                    <ul className="pt-4">
                      <li>
                        Asia exhibited significantly higher mobile wallet usage
                        compared to Europe. In fact, out of the top ten
                        countries with the highest mobile wallet adoption rates,
                        nine were located in the Asia-Pacific region, with the
                        top two originating from Southeast Asia.
                      </li>
                      <li>
                        Saudi Arabia was the first non-Asian country to appear
                        on the list, securing the ninth position. It wasn't
                        until the 22nd spot that Sweden, representing Europe,
                        made its appearance in the survey.
                      </li>
                      <li>
                        Unlike in Asia-Pacific and the Middle East, where mobile
                        wallets have gained prominence as the primary digital
                        payment method, Europe and North America face
                        competition from well-established digital payment
                        systems like credit and debit cards.
                      </li>
                      <li>
                        In emerging economies, mobile wallets represent the
                        first introduction to digital payment solutions.
                      </li>
                    </ul>
                  </p>
                  <img src={articleImg1} className="w-100 pt-5" />
                </div>
                <div className="pt-5" ref={section3Ref} id="section3">
                  <p className="main-article-content">
                    Mobile wallets: A dominant force
                  </p>
                  <p className="light-article-content">
                    At the end of 2020, there were over 2.8 billion mobile
                    wallets in use, and it is projected this number to increase
                    by nearly 74% over the next five years, to reach 4.8 billion
                    by the end of 2025.
                    <br />
                    Forecasts indicate that the utilisation of applications like
                    Apple Pay or Google Pay in North America is expected to
                    experience a twofold increase between 2020 and 2025.
                    However, it is important to note that Asia's market size
                    will surpass North America's by a significant margin. The
                    aforementioned figures encompass applications like PayPal or
                    Google Wallet, which allow users to store their credit or
                    debit card information on their mobile devices for
                    convenient online or in-store purchases.
                    <br />
                    China has been widely recognised as the global leader in
                    proximity mobile payments, which involve using smartphones
                    for contactless transactions. This distinction can be
                    attributed to the popularity of prominent platforms such as
                    Alipay and Tenpay in the country.
                    <br />
                    <br />
                    According to Statistics study conducted in 2022 across
                    various regions Mobile wallet adoption in 39 countries and
                    territories worldwide:
                    <ul className="pt-4">
                      <li>
                        Asia exhibited significantly higher mobile wallet usage
                        compared to Europe. In fact, out of the top ten
                        countries with the highest mobile wallet adoption rates,
                        nine were located in the Asia-Pacific region, with the
                        top two originating from Southeast Asia.
                      </li>
                      <li>
                        Saudi Arabia was the first non-Asian country to appear
                        on the list, securing the ninth position. It wasn't
                        until the 22nd spot that Sweden, representing Europe,
                        made its appearance in the survey.
                      </li>
                      <li>
                        Unlike in Asia-Pacific and the Middle East, where mobile
                        wallets have gained prominence as the primary digital
                        payment method, Europe and North America face
                        competition from well-established digital payment
                        systems like credit and debit cards.
                      </li>
                      <li>
                        In emerging economies, mobile wallets represent the
                        first introduction to digital payment solutions.
                      </li>
                    </ul>
                  </p>
                  <img src={articleImg1} className="w-100 pt-5" />
                </div>
                <div className="pt-5" ref={section4Ref} id="section4">
                  <p className="main-article-content">
                    Mobile wallets: A dominant force
                  </p>
                  <p className="light-article-content">
                    At the end of 2020, there were over 2.8 billion mobile
                    wallets in use, and it is projected this number to increase
                    by nearly 74% over the next five years, to reach 4.8 billion
                    by the end of 2025.
                    <br />
                    Forecasts indicate that the utilisation of applications like
                    Apple Pay or Google Pay in North America is expected to
                    experience a twofold increase between 2020 and 2025.
                    However, it is important to note that Asia's market size
                    will surpass North America's by a significant margin. The
                    aforementioned figures encompass applications like PayPal or
                    Google Wallet, which allow users to store their credit or
                    debit card information on their mobile devices for
                    convenient online or in-store purchases.
                    <br />
                    China has been widely recognised as the global leader in
                    proximity mobile payments, which involve using smartphones
                    for contactless transactions. This distinction can be
                    attributed to the popularity of prominent platforms such as
                    Alipay and Tenpay in the country.
                    <br />
                    <br />
                    According to Statistics study conducted in 2022 across
                    various regions Mobile wallet adoption in 39 countries and
                    territories worldwide:
                    <ul className="pt-4">
                      <li>
                        Asia exhibited significantly higher mobile wallet usage
                        compared to Europe. In fact, out of the top ten
                        countries with the highest mobile wallet adoption rates,
                        nine were located in the Asia-Pacific region, with the
                        top two originating from Southeast Asia.
                      </li>
                      <li>
                        Saudi Arabia was the first non-Asian country to appear
                        on the list, securing the ninth position. It wasn't
                        until the 22nd spot that Sweden, representing Europe,
                        made its appearance in the survey.
                      </li>
                      <li>
                        Unlike in Asia-Pacific and the Middle East, where mobile
                        wallets have gained prominence as the primary digital
                        payment method, Europe and North America face
                        competition from well-established digital payment
                        systems like credit and debit cards.
                      </li>
                      <li>
                        In emerging economies, mobile wallets represent the
                        first introduction to digital payment solutions.
                      </li>
                    </ul>
                  </p>
                  <img src={articleImg1} className="w-100 pt-5" />
                </div>
                <div className="pt-5" ref={section5Ref} id="section5"></div>
                <div className="pt-5" ref={section6Ref} id="section6"></div>
              </div>
              <div className="col-md-3 pt-5 pl-md-5">
                <div className="border p-4 bg-white sticky-top">
                  <ScrollHighlightNabbar
                    section1Ref={section1Ref}
                    navHeader={navHeader}
                    className="sticky-top"
                  />
                </div>
                <div className="border p-4 mt-5 bg-white sticky">
                  <div className="side-article-heading">
                    Want to build one for yourself?
                  </div>
                  <div className="side-article-subheading pt-3">
                    Let us help you with your dream project and some other text
                    that will go here.
                  </div>
                  <div className="side-article-download pt-3">
                    Download
                    <svg
                      width="20"
                      height="14"
                      viewBox="-10 0 25 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="animated-svg"
                    >
                      <path
                        id="Vector"
                        d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container bg-white py-4"></section>
      <Footer />
    </section>
  );
}
