import React, { useState } from "react";
import { Form, Container, InputGroup, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import StockWindow from "./stockWindow";
import "../styles/searchForm.css";

function SearchForm() {
  const [validated, setValidated] = useState(false);
  const [stockSymbol, setStockSymbol] = useState(null);
  const [finalSymbol, setFinalSymbol] = useState("GOOGL");

  const handleChange = event => {
    setStockSymbol(event.target.value);
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (form.checkValidity() !== false && stockSymbol) {
      event.preventDefault();
      setFinalSymbol(stockSymbol);
      setValidated(true);
    }
  };

  return (
    <Container>
      <StockWindow symbol={finalSymbol} />
      <Form
        className="searchMargin"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Row>
          <Form.Group
            className="text-center"
            as={Col}
            controlId="validationCustomUsername"
          >
            <Form.Label></Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <FontAwesomeIcon icon={faSearchDollar} size="sm" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Enter stock symbol"
                aria-describedby="inputGroupPrepend"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid stock symbol.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Button variant="info" type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SearchForm;
