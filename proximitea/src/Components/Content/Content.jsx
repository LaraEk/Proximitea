import React from "react";
import { Row, Col } from "react-materialize";
import "./../Content/content.scss";
import MapContainer from "./../Map/Map.jsx";

class Content extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <p>zoom</p>
            <MapContainer />
            <p>beep</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
