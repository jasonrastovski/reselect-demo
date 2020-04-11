import {
  getWestworldDetailsInit,
  getWestworldDetailsSuccess,
  getWestworldDetailsFailure,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { WestWorldInformation, WestworldState } from "./models";

const initialState: WestworldState = {
  westworldInformation: {} as WestWorldInformation,
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
      errorFetchingWestworldInformation:
        action.errorFetchingWestworldInformation,
    };
  },
});
