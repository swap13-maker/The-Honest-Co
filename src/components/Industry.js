import React from 'react';
import indistry1 from '../images/Industry/indistry1.jpg';
import indistry2 from '../images/Industry/indistry2.jpg';
import indistry3 from '../images/Industry/indistry3.jpg';
import indistry4 from '../images/Industry/indistry4.webp';
import indistry5 from '../images/Industry/indistry5.jpg';
import industry6 from '../images/Industry/industry6.webp';
import industry7 from '../images/Industry/industry7.webp';
import industry8 from '../images/Industry/industry8.webp';
import industry9 from '../images/Industry/industry9.jpg';
import industry10 from '../images/Industry/industry10.webp';

import 'aos/dist/aos.css';

function Industries() {
  return (
    <section className="py-md-5 mb-5 mb-md-0 bg-white">
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
          <div className="col-6 col-md-custom-2 pb-md-6">
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
          <div className="col-6 col-md-custom-2 pb-md-6">
            <div className="industry-card">
              <img className="indistryImage" src={indistry2} alt="Indistry 2" />
              <div className="indistryHeading pt-4 pb-2">Banking & Finance</div>
              <div className="indistry-content">
                Building cutting-edge secure and scalable FinTech solutions for
                banking operations, multi-currency financial transactions and
                insurance practices.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 pb-md-6">
            <div className="industry-card">
              <img className="indistryImage" src={indistry3} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Healthcare Technology
              </div>
              <div className="indistry-content">
                Shaping healthcare's future, developing bespoke solutions &
                mobile apps for various use cases in the patient prognosis
                life-cycle.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2 pb-md-6">
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
          <div className="col-6 col-md-custom-2 pb-md-6">
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

          <div className="col-6 col-md-custom-2">
            <div className="industry-card">
              <img className="indistryImage" src={industry6} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Transportation & Logistics
              </div>
              <div className="indistry-content">
                Streamlining logistics with custom solutions, offering real-time
                tracking and optimized fleet management to boost operational
                efficiency and ensure timely deliveries.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2">
            <div className="industry-card">
              <img className="indistryImage" src={industry7} alt="Indistry 2" />
              <div className="indistryHeading pt-4 pb-2">Renewable Energy</div>
              <div className="indistry-content">
                Innovating sustainable energy solutions with cutting-edge
                technology, ensuring efficient, scalable operations to drive the
                future of clean energy.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2">
            <div className="industry-card">
              <img className="indistryImage" src={industry8} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Social Media & Entertainment
              </div>
              <div className="indistry-content">
                Elevating engagement, crafting dynamic platforms and seamless
                digital solutions to transform the social media and
                entertainment landscape.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2">
            <div className="industry-card">
              <img className="indistryImage" src={industry9} alt="Indistry 1" />
              <div className="indistryHeading pt-4 pb-2">
                Public & Government Sector
              </div>
              <div className="indistry-content">
                Empowering public services with secure, scalable digital
                solutions that enhance operational efficiency and promote
                transparency in governance.
              </div>
            </div>
          </div>
          <div className="col-6 col-md-custom-2">
            <div className="industry-card">
              <img
                className="indistryImage"
                src={industry10}
                alt="Indistry 1"
              />
              <div className="indistryHeading pt-4">
                Manufacturing & Warehousing
              </div>
              <div className="indistry-content">
                Transforming manufacturing, delivering tailored solutions to
                optimize production workflows and automate warehouse management
                for increased precision and efficiency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
