import React from "react";
import indistry1 from "../images/Indistry/indistry1.jpg";
import indistry2 from "../images/Indistry/indistry2.jpg";
import indistry3 from "../images/Indistry/indistry3.jpg";
import indistry4 from "../images/Indistry/indistry4.jpg";
import indistry5 from "../images/Indistry/indistry5.jpg";
import "aos/dist/aos.css";

function Industries() {
  return (
    <section className="py-md-5 mb-5 bg-white">
      <div className="container">
        <div className="row py-md-5 pt-5">
          <div className="col-12 col-md-5 col-lg-5">
            <div className="text-uppercase">
              <h1 className="left-aligned section-heading">Industries</h1>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7 d-flex">
            <div className="sub-heading d-flex align-items-center">
              <p className="m-0 font-size-15">
                Helping multiple businesses achieve impactful digital
                development, end user validation via developing bespoke web &
                mobile application and curating compelling motion & static
                creatives for new age users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-custom-2 odd-section">
            <div className="industry-card">
              <img className="indistryImage" src={indistry1} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">D2C & ECommerce</div>
              <div className="indistry-content">
                Crafting D2C success, tailored solutions with seamless UX/UI,
                and robust e-commerce platforms to elevate online presence and
                drive customer engagement.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 even-section">
            <div className="industry-card">
              <img className="indistryImage" src={indistry2} alt="Indistry 2" />
              <div className="indistryHeading pt-4 pb-2">Banking & Finance</div>
              <div className="indistry-content">
                Revolutionizing finance, creating secure & scalable FinTech
                solutions optimizing banking operations and ensuring
                cutting-edge digital transformation for financial institutions.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 odd-section marTop--15per">
            <div className="industry-card">
              <img className="indistryImage" src={indistry3} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Healthcare Technology
              </div>
              <div className="indistry-content">
                Shaping healthcare's future, developing cutting-edge Health-Tech
                solutions, specialized in EMR integrations, and data privacy
                advancements for exceptional service delivery.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 even-section marTop--15per">
            <div className="industry-card">
              <img className="indistryImage" src={indistry4} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Staffing & Recruitment
              </div>
              <div className="indistry-content">
                Creating bespoke solutions for faster recuitment and talent
                solutions. Making the best of the digital development via
                developing custom mobile applications.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 odd-section marTop--20per">
            <div className="industry-card">
              <img className="indistryImage" src={indistry5} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Educational Technology
              </div>
              <div className="indistry-content">
                Empowering education, customized EdTech platforms, AI-driven
                learning, and LMS solutions to revolutionize educational
                experiences for a brighter future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
