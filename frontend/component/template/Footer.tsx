import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsFacebook, BsGlobe } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-light p-2 mt-3">
      <Container>
        <Row>
          <Col>
            <span className="text-muted fw-bold">
              <h5>BLINK SAVE</h5>
            </span>
          </Col>
          <Col></Col>
          <Col className="d-flex justify-content-around">
            <span>
              <h3 className="text-muted">
                <BsGithub></BsGithub>
              </h3>
            </span>
            <span>
              <h3 className="text-muted">
                <BsFacebook></BsFacebook>
              </h3>
            </span>
            <span>
              <h3 className="text-muted">
                <BsGlobe></BsGlobe>
              </h3>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
