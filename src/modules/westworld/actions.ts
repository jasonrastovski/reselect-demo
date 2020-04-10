import { createAction } from "@reduxjs/toolkit";
import {
  GetWestworldDetailsSuccess,
  GetWestworldDetailsFailure,
} from "./models";

export const getWestworldDetailsInit = createAction(
  "GET_WESTWORLD_DETAILS_INIT"
);

export const getWestworldDetailsSuccess = createAction<
  GetWestworldDetailsSuccess
>("GET_WESTWORLD_DETAILS_SUCCESS");

export const getWestworldDetailsFailure = createAction<
  GetWestworldDetailsFailure
>("GET_WESTWORLD_DETAILS_FAILURE");
