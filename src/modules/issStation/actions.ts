import {
  GetIssStationDetailsSuccessPayload,
  GetIssStationDetailsFailurePayload,
  ISSLocationInformation,
} from "./models";

export const getIssStationDetailsInit = "GET_ISS_STATION_DETAILS_INIT";
export const getIssStationDetailsSuccess = "GET_ISS_STATION_DETAILS_SUCCESS";
export const getIssStationDetailsFailure = "GET_ISS_STATION_DETAILS_FAILURE";

interface GetIssStationDetailsInitAction {
  type: typeof getIssStationDetailsInit;
}

interface GetIssStationDetailsSuccessAction {
  type: typeof getIssStationDetailsSuccess;
  payload: GetIssStationDetailsSuccessPayload;
}

interface GetIssStationDetailsFailureAction {
  type: typeof getIssStationDetailsFailure;
  payload: GetIssStationDetailsFailurePayload;
}

export type IssStationActionTypes =
  | GetIssStationDetailsInitAction
  | GetIssStationDetailsSuccessAction
  | GetIssStationDetailsFailureAction;

export function initIssStation(): IssStationActionTypes {
  return {
    type: getIssStationDetailsInit,
  };
}

export function getIssStationSuccess(
  issLocationInformation: ISSLocationInformation
): IssStationActionTypes {
  return {
    type: getIssStationDetailsSuccess,
    payload: {
      issLocationInformation,
    },
  };
}

export function getIssStationFailure(
  errorMessage: string
): IssStationActionTypes {
  return {
    type: getIssStationDetailsFailure,
    payload: { errorFetchingIssStationInformation: errorMessage },
  };
}
