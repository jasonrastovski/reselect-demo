import React, { useEffect, ReactNode } from "react";
import { store } from "../../store";
import {
  getIssStationDetailsInit,
  getIssStationDetailsSuccess,
} from "./actions";
import { ISSLocationInformation } from "./models";
import { Card, CardContent, Typography } from "@material-ui/core";
import { ApplicationState } from "../../models";
import { connect } from "react-redux";

import GoogleMapReact from "google-map-react";

interface ISSDisplayProps {
  iSSLocationInformation: ISSLocationInformation;
  isFetchingIssStationInformation: boolean;
  errorFetchingIssStationInformation: string;
}

const ISSDisplay: React.FunctionComponent<ISSDisplayProps> = (
  props: ISSDisplayProps
) => {
  const getIssStationDetails = () => {
    store.dispatch(getIssStationDetailsInit());

    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((json) =>
        store.dispatch(
          getIssStationDetailsSuccess({ issLocationInformation: json })
        )
      );
  };
  useEffect(() => {
    getIssStationDetails();

    // let handler = setInterval(() => {
    //   getIssStationDetails();
    // }, 5000);

    // return () => {
    //   clearInterval(handler);
    // };
  }, []);

  const renderControl =
    !props.isFetchingIssStationInformation &&
    !!props.iSSLocationInformation?.iss_position?.latitude;

  const getDateTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toTimeString();
  };

  const MAP_KEY = "AIzaSyBXbnjfJLH6Sdudp5dIFRqHFF7P2YOPq40";

  const IMG = <img src="./ISS.png" alt="iss" height="30px" />;

  interface SpaceStationProps {
    img: ReactNode;
    lat: number;
    lng: number;
  }

  const SpaceStation: React.FunctionComponent<SpaceStationProps> = ({
    img,
  }) => <div>{IMG}</div>;

  // const coordinates = {
  //   lat: props.iSSLocationInformation.iss_position.latitude,
  //   lng: props.iSSLocationInformation.iss_position.longitude,
  // };
  const coordinates = {
    lat: 59.95,
    lng: 30.33,
  };
  console.log("Rendering ISSDisplay...", props);
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          ISS Station
        </Typography>
        {renderControl && (
          <>
            <Typography variant="body2" color="textSecondary">
              latitude: {props.iSSLocationInformation.iss_position.latitude}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              longitude: {props.iSSLocationInformation.iss_position.longitude}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              timestamp: {getDateTime(props.iSSLocationInformation.timestamp)}
            </Typography>

            <div className="map" style={{ height: "100vh", width: "80%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: MAP_KEY }}
                defaultZoom={11}
                defaultCenter={coordinates}
              >
                <SpaceStation
                  lat={+props.iSSLocationInformation.iss_position.latitude}
                  lng={+props.iSSLocationInformation.iss_position.longitude}
                  img={IMG}
                />
              </GoogleMapReact>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  iSSLocationInformation: state.issStationSlice.iSSLocationInformation,
  isFetchingIssStationInformation:
    state.issStationSlice.isFetchingIssStationInformation,
  errorFetchingIssStationInformation:
    state.issStationSlice.errorFetchingIssStationInformation,
});

export default connect(mapStateToProps)(ISSDisplay);
