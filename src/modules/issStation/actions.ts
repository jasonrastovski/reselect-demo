import { createAction } from "@reduxjs/toolkit";
import {
  GetIssStationDetailsSuccess,
  GetIssStationDetailsFailure,
} from "./models";

export const getIssStationDetailsInit = createAction(
  "GET_ISS_STATION_DETAILS_INIT"
);

export const getIssStationDetailsSuccess = createAction<
  GetIssStationDetailsSuccess
>("GET_ISS_STATION_DETAILS_SUCCESS");

export const getIssStationDetailsFailure = createAction<
  GetIssStationDetailsFailure
>("GET_ISS_STATION_DETAILS_FAILURE");
