import React from "react";
import { WestWorldInformationDisplayMemoed } from "../modules/westworld/westworldDisplay";
import { Container, Grid } from "@material-ui/core";
import { ISSDisplayMemoed } from "../modules/issStation/issStationDisplay";
import { ISSLocationInformation } from "../modules/issStation/models";
import { WestWorldInformation } from "../modules/westworld/models";
import { ApplicationState } from "../models";
import { connect } from "react-redux";
import { wssSelector, issSelector } from "../selectors";

interface MainPageProps {
  iSSLocationInformation: ISSLocationInformation;
  isFetchingIssStationInformation: boolean;
  errorFetchingIssStationInformation: string;

  westWorldInformation: WestWorldInformation;
  isFetchingWestworldInformation: boolean;
  errorFetchingWestworldInformation: string;
}

const SimpleComponent: React.FunctionComponent = () => {
  console.log("SimpleComponent renders");
  return <div>simple</div>;
};

const SimpleComponentWrapped = React.memo(SimpleComponent);

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

  console.log("mainPage");
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SimpleComponentWrapped />
          <WestWorldInformationDisplayMemoed
            westWorldInformation={westWorldInformation}
            isFetchingWestworldInformation={isFetchingWestworldInformation}
            errorFetchingWestworldInformation={
              errorFetchingWestworldInformation
            }
          />
        </Grid>
        <Grid item xs={6}>
          <ISSDisplayMemoed
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

const mapStateToProps = (state: ApplicationState) => ({
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
});

export default connect(mapStateToProps)(MainPage);
