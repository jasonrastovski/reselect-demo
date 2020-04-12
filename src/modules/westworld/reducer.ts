import {
  getWestworldDetailsInit,
  getWestworldDetailsSuccess,
  getWestworldDetailsFailure,
  WestworldActionTypes,
} from "./actions";
import { WestWorldInformation, WestworldState } from "./models";

const initialState: WestworldState = {
  westworldInformation: {} as WestWorldInformation,
  errorFetchingWestworldInformation: "",
  isFetchingWestworldInformation: false,
};

export const westworldReducer = (
  state = initialState,
  action: WestworldActionTypes
): WestworldState => {
  switch (action.type) {
    case getWestworldDetailsInit: {
      return { ...state, isFetchingWestworldInformation: true };
    }
    case getWestworldDetailsSuccess: {
      return {
        ...state,
        isFetchingWestworldInformation: false,
        westworldInformation: {
          ...action.payload.westworldInformation,
          episodes: [...action.payload.westworldInformation._embedded.episodes],
        },
      };
    }
    case getWestworldDetailsFailure: {
      return {
        ...state,
        isFetchingWestworldInformation: false,
        errorFetchingWestworldInformation:
          action.payload.errorFetchingWestworldInformation,
      };
    }
    default:
      return state;
  }
};
