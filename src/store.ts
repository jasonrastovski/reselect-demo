import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { westworldReducer } from "./modules/westworld/reducer";
import { issStationReducer } from "./modules/issStation/reducer";

export const store = configureStore({
  reducer: combineReducers({
    westworldSlice: westworldReducer,
    issStationSlice: issStationReducer,
  }),
});
