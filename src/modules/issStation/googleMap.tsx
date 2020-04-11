import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

interface GoogleMapProps {
  google: any;
}

const GoogleMap: React.FunctionComponent<GoogleMapProps> = (props) => {
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Map
        google={props.google}
        zoom={8}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "GET YOUR OWN",
})(GoogleMap);
