import {
  getWestworldDetailsInit,
  getWestworldDetailsSuccess,
  getWestworldDetailsFailure,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { ApplicationState, WestWorldInformation, ISSLocation } from "./models";

const initialState: ApplicationState = {
  westworldInformation: {} as WestWorldInformation,
  iSSLocation: {} as ISSLocation,
  errorFetchingWestworldInformation: "",
  isFetchingWestworldInformation: false,
};

export const westworldReducer = createReducer(initialState, {
  [getWestworldDetailsInit.toString()]: (state) => {
    return { ...state, isFetchingWestworldInformation: true };
  },
  [getWestworldDetailsSuccess.toString()]: (state, action) => {
    return {
      ...state,
      isFetchingWestworldInformation: false,
      westworldInformation: {
        ...action.payload.westworldInformation,
        episodes: [...action.payload.westworldInformation._embedded.episodes],
      },
    };
  },
  [getWestworldDetailsFailure.toString()]: (state, action) => {
    return {
      ...state,
      isFetchingWestworldInformation: false,
      action,
    };
  },
});
