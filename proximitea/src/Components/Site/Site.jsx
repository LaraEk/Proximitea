import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import logo from "./logotransparent.png";
import Content from "../Content/Content.jsx";

console.log(logo);

class Site extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={3} className="emptyfirstcolumn" />
          <Col s={6} className="notemptysecondcolumn">
            <div>
              <center>
                <img src={logo} alt="logo" width="100%" />
                <Row>
                  <Col className="sitecontainer">
                    <Content />
                  </Col>
                </Row>
              </center>
            </div>
          </Col>
          <Col s={3} className="emptythirdcolumn" />
        </Row>
      </div>
    );
  }
}

export default Site;
