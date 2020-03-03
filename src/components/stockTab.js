import React, { useState } from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import "../styles/tabContent.css";

function ControlledTabs(props) {
  const [key, setKey] = useState("home");

  return (
    <div className="border1 mb-3">
      <Tabs
        className="tabs"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab className="tab" eventKey="home" title="Company">
          <Row>
            <Col sm={12} md={12} lg={12} xl={12} xs={12}>
              {props.info.description}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="mb-2" sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Company:</span>{" "}
              {props.info.companyName}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Symbol:</span> {props.info.symbol}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Employees:</span>{" "}
              {props.info.employees}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">CEO:</span> {props.info.CEO}
            </Col>
          </Row>
        </Tab>
        <Tab className="tab" eventKey="profile" title="Stock">
          <Row>
            <Col className="mb-2" sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Current Price:</span> {props.stock}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">P/E Ratio:</span>{" "}
              {props.stats.peRatio}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">P/S Ratio:</span>{" "}
              {props.stats.priceToSales}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">PEG Ratio:</span>{" "}
              {props.stats.pegRatio}
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mb-2" sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Debt-to-Equity:</span>{" "}
              {props.stats.debtToEquity}
            </Col>
            <Col className="mt-2" sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Beta:</span>{" "}
              {props.stats.beta.toFixed(5)}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Price-to-Book:</span>{" "}
              {props.stats.priceToBook.toFixed(5)}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Dividend:</span>{" "}
              {props.stats.dividendYield ? (
                props.stats.dividendYield
              ) : (
                <span>N/A</span>
              )}
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mb-2" sm={12} md={3} lg={3} xl={3} xs={12}>
              <span className="span mr-1">Industry:</span> {props.info.industry}
            </Col>
          </Row>
        </Tab>
        <Tab className="tab" eventKey="contact" title="Contact">
          <Row>
            <Col className="mb-2" sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Address:</span> {props.info.address}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">State:</span> {props.info.state}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">City:</span> {props.info.city}
            </Col>
            <Col sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Zip Code:</span> {props.info.zip}
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mb-2" sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Phone:</span> {props.info.phone}
            </Col>
            <Col className="mt-2" sm={6} md={3} lg={3} xl={3} xs={6}>
              <span className="span mr-1">Website:</span>{" "}
              <a href={props.info.website}>{props.info.website}</a>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabs;
