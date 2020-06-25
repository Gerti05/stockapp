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
<<<<<<< HEAD
              <span className="color"> StockEZe </span>
=======
              <span className="color"> StockEZ </span>
>>>>>>> 338283df7d7db0153751c314b63c0940f1234734
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default FooterPage;
