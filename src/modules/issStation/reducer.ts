import { createReducer } from "@reduxjs/toolkit";
import { IssLocationState, ISSLocationInformation } from "./models";
import {
  getIssStationDetailsInit,
  getIssStationDetailsSuccess,
  getIssStationDetailsFailure,
} from "./actions";

const initialState: IssLocationState = {
  iSSLocationInformation: {} as ISSLocationInformation,
  isFetchingIssStationInformation: false,
  errorFetchingIssStationInformation: "",
};

export const issStationReducer = createReducer(initialState, {
  [getIssStationDetailsInit.toString()]: (state) => {
    return { ...state, isFetchingIssStationInformation: true };
  },
  [getIssStationDetailsSuccess.toString()]: (state, action) => {
    return {
      ...state,
      isFetchingIssStationInformation: false,
      iSSLocationInformation: {
        ...action.payload.issLocationInformation,
      },
    };
  },
  [getIssStationDetailsFailure.toString()]: (state, action) => {
    return {
      ...state,
      isFetchingIssStationInformation: false,
      errorFetchingIssStationInformation:
        action.errorFetchingIssStationInformation,
    };
  },
});
