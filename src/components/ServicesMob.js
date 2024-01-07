import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

export default function ServicesMob() {
  return (
    <>
      <section className="container d-block d-md-none" id="ServicesMob">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5">
            <div className="text-uppercase">
              <h1 className="left-aligned section-heading">
                <span className="text-light-color text-light-space">OUR</span>{" "}
                SERVICES
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7 d-flex">
            <div className="sub-heading d-flex align-items-center">
              <p className="m-0">
              Whether it's developing a software application, designing a new product or creating compelling marketing content, our commitment is unwavering, to deliver exceptional results that consistently exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-md-5 my-4 d-block d-md-none">
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle="Application Development">
            <div className="accordian-header">
            Crafting customized, user-centric applications across platforms, leveraging the best of digital development.
            </div>
            <ul className="py-4 accordian-list">
              <li>Custom Software Development</li>
              <li>Mobile Application Development</li>
              <li>Ai & ML solutions</li>
              <li>Web 3 & Blockchain</li>
            </ul>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Content Creation">
            <div className="accordian-header">
            Curating powerful storytelling and creating captivating visuals driving meaningful connections.
            </div>
            <ul className="py-4 accordian-list">
              <li>motion graphics</li>
              <li>2D & 3D Graphics Design</li>
              <li>branding & identity design</li>
              <li>advertisements</li>
            </ul>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Industrial Design">
            <div className="accordian-header">
            Transforming ideas into tangible products, from prototyping to packaging, creating market fit products.
            </div>
            <ul className="py-4 accordian-list">
              <li>concept & prototyping</li>
              <li>product design</li>
              <li>Merchandising & Packaging</li>
              <li>manufacturing support</li>
            </ul>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </>
  );
}
