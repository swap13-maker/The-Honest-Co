import React, { useState, useEffect } from "react";
import "./../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import InnerHeader from "../InnerHeader.js";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import article from "../../images/article1.png";

function Article1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element's position to trigger the animation
      easing: "ease-in-out", // Animation easing (CSS transition-timing-function)
      delay: 0, // Delay (in milliseconds) before the animation starts
      once: true, // Whether the animation should occur only once or every time the element is scrolled into view
      mirror: false, // Whether elements with the same data-aos value should animate individually or together
    });
  }, []);

  return (
    <section>
      {/* Header */}
      <InnerHeader/>
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
                        Top Payment Innovations <br/> & Technologies To Watch in 2023
                    </div>
                    <div className="article-sub-heading pt-4">
                        <span className="px-2">Carthick Nath</span> &bull; <span className="px-2">Banking & Finance</span> &bull; <span className="px-2">May 19, 2023</span>
                    </div>
                    <img src={article} className="w-100 py-5" />
                </div>

                <div className="col-md-9">
                    <p className="main-article-content">
                        From mobile wallets to biometric authentication and smart speaker payments, these new technologies are revolutionizing the way people purchase and exchange funds.
                    </p>
                    <p className="light-article-content">
                    The world of payments is constantly evolving, and payment innovations are shaping the future of how we transact. Let’s dive into the top payment innovations and understand what’s driving their growth, as well as their impact on the payments industry.
                    </p>
                    <br/><br/>
                    <p className="main-article-content">
                        Mobile wallets: A dominant force
                    </p>
                    <p className="light-article-content">
                    At the end of 2020, there were over 2.8 billion mobile wallets in use, and it is projected this number to increase by nearly 74% over the next five years, to reach 4.8 billion by the end of 2025.<br/>
                    Forecasts indicate that the utilisation of applications like Apple Pay or Google Pay in North America is expected to experience a twofold increase between 2020 and 2025. However, it is important to note that Asia's market size will surpass North America's by a significant margin.
                    The aforementioned figures encompass applications like PayPal or Google Wallet, which allow users to store their credit or debit card information on their mobile devices for convenient online or in-store purchases.<br/>
                    China has been widely recognised as the global leader in proximity mobile payments, which involve using smartphones for contactless transactions. This distinction can be attributed to the popularity of prominent platforms such as Alipay and Tenpay in the country.
                    </p>
                </div>
                <div className="col-md-3">
                    <div className="border">
                        
                    </div>
                </div>
            </div>
          </div>

          
          
        </div>
      </section>

      <section className="container bg-white py-4">
        
      </section>
      <Footer />
    </section>
  );
}

export default Article1;
