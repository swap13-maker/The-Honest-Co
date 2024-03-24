import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import TagManager from "react-gtm-module";
import { Helmet } from "react-helmet";
import GoogleTagManager from "./GoogleTagManager";

const tagManagerArgs = {
  gtmId: "GTM-PG45Q8KQ",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <GoogleTagManager />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          description:
            "We are a community of digital creators who make really cool products for business that help them succeed.",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Portfolio",
              item: "https://thehonestco.in/portfolio",
              description:
                "Our portfolio of digital solutions created for businesses all across the world.",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Resources",
              item: "https://thehonestco.in/resources",
              description:
                "Our tools and techniques used by our team for project execution.",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Share Your Requirements",
              item: "https://thehonestco.in/get-in-touch/customer-inquiry",
              description:
                "Need for digital development? Reach out to us here.",
            },
          ],
        })}
      </script>
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
