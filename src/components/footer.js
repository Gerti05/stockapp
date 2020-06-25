import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import "../styles/navbar.css";

const FooterPage = () => {
  return (
    <Navbar bg="dark" className="font-small mt-4 bottom">
      <Container fluid>
        <Row>
          <Col>
            <div className="color2">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <span className="color"> StockEZe </span>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default FooterPage;
