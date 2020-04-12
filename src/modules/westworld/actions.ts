import {
  GetWestworldDetailsSuccessPayload,
  GetWestworldDetailsFailurePayload,
  WestWorldInformation,
} from "./models";

export const getWestworldDetailsInit = "GET_WESTWORLD_DETAILS_INIT";
export const getWestworldDetailsSuccess = "GET_WESTWORLD_DETAILS_SUCCESS";
export const getWestworldDetailsFailure = "GET_WESTWORLD_DETAILS_FAILURE";

interface GetWestworldDetailsInitAction {
  type: typeof getWestworldDetailsInit;
}

interface GetWestworldDetailsSuccessAction {
  type: typeof getWestworldDetailsSuccess;
  payload: GetWestworldDetailsSuccessPayload;
}

interface GetWestworldDetailsFailureAction {
  type: typeof getWestworldDetailsFailure;
  payload: GetWestworldDetailsFailurePayload;
}

export type WestworldActionTypes =
  | GetWestworldDetailsInitAction
  | GetWestworldDetailsSuccessAction
  | GetWestworldDetailsFailureAction;

export function initWestworld(): WestworldActionTypes {
  return {
    type: getWestworldDetailsInit,
  };
}

export function getWestworldSuccess(
  westworldInformation: WestWorldInformation
): WestworldActionTypes {
  return {
    type: getWestworldDetailsSuccess,
    payload: {
      westworldInformation,
    },
  };
}

export function getWestworldFailure(
  errorMessage: string
): WestworldActionTypes {
  return {
    type: getWestworldDetailsFailure,
    payload: { errorFetchingWestworldInformation: errorMessage },
  };
}
