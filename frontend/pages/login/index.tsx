import React from "react";
import styled from "styled-components";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { InputField, ImgCover, Button } from "../../component/atomic";

const ImgMainCover = styled(ImgCover)`
  border-radius: 35px 35px 0 0;
  position: absolute;
  z-index: -1;
`;

function Login() {
  return (
    <Container style={{ minHeight: "75vh" }}>
      <div style={{ minHeight: "10vh" }}></div>
      <Row>
        <Col xl={4} md={3} sm={2}></Col>
        <Col xl={4} md={6} sm={8}>
          <Row>
            <Col
              className="p-0 position-relative"
              sm={12}
              style={{ minHeight: "30vh" }}
            >
              <ImgMainCover src="https://image.freepik.com/free-vector/gradient-galaxy-background_23-2148974619.jpg"></ImgMainCover>
              <div className="p-4 text-white d-flex flex-column justify-content-center h-100">
                <h1>Welcome to</h1>
                <h1>my webite</h1>
                <h5>We are in the money way !</h5>
              </div>
            </Col>
            <Col
              className="p-4 border"
              sm={12}
              style={{ minHeight: "25vh", borderRadius: "0 0 35px 35px" }}
            >
              <p className="fw-bold">username</p>
              <InputField type="text" className="mb-2"></InputField>
              <p className="fw-bold">password</p>
              <InputField type="password" className="mb-2"></InputField>
              <div className="d-flex justify-content-end mt-2 mb-2">
                <Button color="primary">LOGIN</Button>
              </div>
              <hr />
              <p className="text-center text-muted">OR</p>

              <div className="d-flex justify-content-around">
                <h1>
                  <BsFacebook></BsFacebook>
                </h1>
                <h1>
                  <BsGoogle></BsGoogle>
                </h1>
                <h1>
                  <BsGoogle></BsGoogle>
                </h1>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={4} md={3} sm={2}></Col>
      </Row>
    </Container>
  );
}

export default Login;
