import React from "react";
import { Container, Grid } from "@material-ui/core";
import { ISSLocationInformation } from "../modules/issStation/models";
import { WestWorldInformation } from "../modules/westworld/models";
import { ApplicationState } from "../models";
import { connect } from "react-redux";
import { ISSDisplay } from "../modules/issStation/issStationDisplay";
import { basicWssSelector } from "../basicSelectors";
import { wssSelector } from "../selectors";
import { WestWorldInformationDisplay } from "../modules/westworld/westworldDisplay";

interface MainPageProps {
  iSSLocationInformation: ISSLocationInformation;
  isFetchingIssStationInformation: boolean;
  errorFetchingIssStationInformation: string;

  westWorldInformation: WestWorldInformation;
  isFetchingWestworldInformation: boolean;
  errorFetchingWestworldInformation: string;
}

const MainPage: React.FunctionComponent<MainPageProps> = (
  props: MainPageProps
) => {
  const {
    westWorldInformation,
    isFetchingWestworldInformation,
    errorFetchingWestworldInformation,
    iSSLocationInformation,
    isFetchingIssStationInformation,
    errorFetchingIssStationInformation,
  } = props;

  console.log("Rendering mainPage...");
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <WestWorldInformationDisplay
            westWorldInformation={westWorldInformation}
            isFetchingWestworldInformation={isFetchingWestworldInformation}
            errorFetchingWestworldInformation={
              errorFetchingWestworldInformation
            }
          />
        </Grid>
        <Grid item xs={6}>
          <ISSDisplay
            iSSLocationInformation={iSSLocationInformation}
            isFetchingIssStationInformation={isFetchingIssStationInformation}
            errorFetchingIssStationInformation={
              errorFetchingIssStationInformation
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    westWorldInformation: state.westworldSlice.westworldInformation,
    isFetchingWestworldInformation:
      state.westworldSlice.isFetchingWestworldInformation,
    errorFetchingWestworldInformation:
      state.westworldSlice.errorFetchingWestworldInformation,
    iSSLocationInformation: state.issStationSlice.iSSLocationInformation,
    isFetchingIssStationInformation:
      state.issStationSlice.isFetchingIssStationInformation,
    errorFetchingIssStationInformation:
      state.issStationSlice.errorFetchingIssStationInformation,
  };
};

export default connect(mapStateToProps)(MainPage);
