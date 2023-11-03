import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

export default function ServicesMob() {
  return (
    <div className="container my-5 d-block d-md-none">
      <MDBAccordion initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Architecture">
          <div className="accordian-header">
            Robust and intuitive digital solutions that help you connect with
            your customers.
          </div>
          <ul className="py-4 accordian-list">
            <li>Building Information Modeling</li>
            <li>Interior Design</li>
            <li>Renovation & Restoration</li>
            <li>Architectural Design</li>
            <li>Feasibility Studies & Site Analysis</li>
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Industry Design">
          <div className="accordian-header">
            From Concept To Production, We Create Beautiful And Functional
            Products That Resonate With Your Audience.
          </div>
          <ul className="py-4 accordian-list">
            <li>PRODUCT DESIGN</li>
            <li>CONCEPT DEVELOPMENT & PROTOTYPING</li>
            <li>BRANDING & IDENTITY DESIGN</li>
            <li>MANUFACTURING SUPPORT</li>
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Web & Mobile Development">
          <div className="accordian-header">
            Our Services Have Been Divided Into Four Categories Based On The
            Kind Of Work We Have Done.
          </div>
          <ul className="py-4 accordian-list">
            <li>CUSTOM SOFTWARE DEVELOPMENT</li>
            <li>MOBILE APPLICATION DEVELOPMENT</li>
            <li>AI & ML SOLUTIONS</li>
            <li>WEB3 & BLOCKCHAIN APPLICATION DEVELOPMENT</li>
          </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Content & Adversiting">
          <div className="accordian-header">
            Our Services Have Been Divided Into Four Categories Based On The
            Kind Of Work We Have Done.
          </div>
          <ul className="py-4 accordian-list">
            <li>MOTION GRAPHICS</li>
            <li>CONTENT CREATION</li>
            <li>BRANDING & IDENTITY DESIGN</li>
            <li>ADVERTISEMENT</li>
          </ul>
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
}
