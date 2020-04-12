import React, { useEffect } from "react";
import { store } from "../../store";
import {
  initIssStation,
  getIssStationSuccess,
  getIssStationFailure,
} from "./actions";
import { ISSLocationInformation } from "./models";
import { Card, CardContent, Typography } from "@material-ui/core";

interface ISSDisplayProps {
  iSSLocationInformation: ISSLocationInformation;
  isFetchingIssStationInformation: boolean;
  errorFetchingIssStationInformation: string;
}

export const ISSDisplay: React.FunctionComponent<ISSDisplayProps> = (
  props: ISSDisplayProps
) => {
  const getIssStationDetails = () => {
    store.dispatch(initIssStation());

    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((json) => store.dispatch(getIssStationSuccess(json)))
      .catch((err) => store.dispatch(getIssStationFailure(err)));
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
          </>
        )}
      </CardContent>
    </Card>
  );
};
