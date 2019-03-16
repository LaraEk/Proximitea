import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%"
};

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 38.88682,
          lng: -77.00524
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apikey: "insert API Key Here"
})(MapContainer);
