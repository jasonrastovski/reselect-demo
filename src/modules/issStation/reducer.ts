import { IssLocationState, ISSLocationInformation } from "./models";
import {
  getIssStationDetailsInit,
  getIssStationDetailsSuccess,
  getIssStationDetailsFailure,
  IssStationActionTypes,
} from "./actions";

const initialState: IssLocationState = {
  iSSLocationInformation: {} as ISSLocationInformation,
  isFetchingIssStationInformation: false,
  errorFetchingIssStationInformation: "",
};

export const issStationReducer = (
  state = initialState,
  action: IssStationActionTypes
): IssLocationState => {
  switch (action.type) {
    case getIssStationDetailsInit: {
      return { ...state, isFetchingIssStationInformation: true };
    }
    case getIssStationDetailsSuccess: {
      return {
        ...state,
        isFetchingIssStationInformation: false,
        iSSLocationInformation: {
          ...action.payload.issLocationInformation,
        },
      };
    }
    case getIssStationDetailsFailure: {
      return {
        ...state,
        isFetchingIssStationInformation: false,
        errorFetchingIssStationInformation:
          action.payload.errorFetchingIssStationInformation,
      };
    }
    default:
      return state;
  }
};
