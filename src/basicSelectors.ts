import { ApplicationState } from "./models";

const getWestWordInformation = (state: ApplicationState) => {
  return state.westworldSlice.westworldInformation;
};

const getIsFetchingWestworldInformation = (state: ApplicationState) =>
  state.westworldSlice.isFetchingWestworldInformation;

const getErrorFetchingWestworldInformation = (state: ApplicationState) =>
  state.westworldSlice.errorFetchingWestworldInformation;

export const basicWssSelector = (state: ApplicationState) => {
  console.log("doing 'work' in the basic wssSelector");
  return {
    westworldInformation: getWestWordInformation(state),
    isFetchingWestworldInformation: getIsFetchingWestworldInformation(state),
    errorFetchingWestworldInformation: getErrorFetchingWestworldInformation(
      state
    ),
  };
};
