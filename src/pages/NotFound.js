import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerHeader from "../components/InnerHeader.js";
import "./../App.css";

function NotFound() {
  return (
    <section>
        <InnerHeader />
        <Container>
            <Row className="justify-content-center align-items-center vh-100">
                <Col xs={11} sm={12} md={12}>
                <div className="thanks-container text-center">
                    <div className="thank-you">OOPS !</div>
                    <div className="d-md-block d-grid">
                        <button className="bg-dark text-uppercase text-white font-weight-300 button-thanks mt-3">
                            <Link className="text-white" to="/">Go to home page</Link>
                        </button>
                        <Link to="/portfolio" className="view-projects px-5 mt-3">
                            view our projects
                            <svg className="mx-2" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M0.224609 5.45454L0.228646 5.45331L0.610734 5.45327L1.37491 5.45317H13.6002L10.07 8.98337L10.8632 9.77659L15.7476 4.8922L10.8632 0.0078125L10.07 0.801028L13.6002 4.33123H1.37491H0.610829H0.228789L0.224609 5.45454Z" fill="black"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default NotFound;

