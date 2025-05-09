import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

export default function ServicesMob() {
  return (
    <>
      <section className="container d-block d-md-none" id="ServicesMob">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5">
            <div className="text-uppercase">
              <h1 className="left-aligned section-heading">
                <span className="text-light-color text-light-space">OUR</span>{' '}
                SERVICES
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7 d-flex">
            <div className="sub-heading d-flex align-items-center">
              <p className="m-0">
                Whether it's developing a software application, designing a new
                product or creating compelling marketing content, our commitment
                is unwavering, to deliver exceptional results that consistently
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-md-5 my-4 d-block d-md-none">
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle="Custom Solutions ">
            <div className="accordian-header">
              Crafting customized, user-centric applications across platforms,
              leveraging the best of digital development.
            </div>
            <ul className="py-4 accordian-list">
              <li>Process Automation </li>
              <li>Digital Development </li>
              <li>System Integrations </li>
              <li>ERP Solutions</li>
            </ul>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Mobile Applications ">
            <div className="accordian-header">
              Curating powerful mobility solutions for the fast moving
              businesses, allowing customer to take actions swiftly.
            </div>
            <ul className="py-4 accordian-list">
              <li>Digital Product Development</li>
              <li>E-Commerce Mobile Apps </li>
              <li>ERP Mobility Solutions</li>
              <li>Bespoke Applications</li>
            </ul>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="AI & ML Solutions ">
            <div className="accordian-header">
              Transforming ideas into tangible working solutions, creating
              bespoke automations saving time and money.
            </div>
            <ul className="py-4 accordian-list">
              <li>System Integration</li>
              <li>Process Automation</li>
              <li>Custom Model Generation</li>
              <li>Model Training</li>
            </ul>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </>
  );
}
