import { createSelector } from "reselect";
import { ApplicationState } from "./models";

const getWestWordInformation = (state: ApplicationState) => {
  return state.westworldSlice.westworldInformation;
};

const getIsFetchingWestworldInformation = (state: ApplicationState) =>
  state.westworldSlice.isFetchingWestworldInformation;

const getErrorFetchingWestworldInformation = (state: ApplicationState) =>
  state.westworldSlice.errorFetchingWestworldInformation;

export const wssSelector = createSelector(
  [
    getWestWordInformation,
    getIsFetchingWestworldInformation,
    getErrorFetchingWestworldInformation,
  ],
  (
    westworldInformation,
    isFetchingWestworldInformation,
    errorFetchingWestworldInformation
  ) => {
    console.log("doing 'work' in the wssSelector");
    return {
      westworldInformation,
      isFetchingWestworldInformation,
      errorFetchingWestworldInformation,
    };
  }
);

const getIssStationInformation = (state: ApplicationState) => {
  return state.issStationSlice.iSSLocationInformation;
};

const getIsFetchingIssStationInformation = (state: ApplicationState) =>
  state.issStationSlice.isFetchingIssStationInformation;

const getErrorFetchingIssStationInformation = (state: ApplicationState) =>
  state.issStationSlice.errorFetchingIssStationInformation;

export const issSelector = createSelector(
  [
    getIssStationInformation,
    getIsFetchingIssStationInformation,
    getErrorFetchingIssStationInformation,
  ],
  (
    issStationInformation,
    isFetchingIssStationInformation,
    errorFetchingIssStationInformation
  ) => {
    console.log("issSelector");
    return {
      issStationInformation,
      isFetchingIssStationInformation,
      errorFetchingIssStationInformation,
    };
  }
);
