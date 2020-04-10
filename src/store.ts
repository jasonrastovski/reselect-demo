import { configureStore } from "@reduxjs/toolkit";
import { westworldReducer } from "./modules/westworld/reducer";

export const store = configureStore({
  reducer: westworldReducer,
});
