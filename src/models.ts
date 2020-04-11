import { WestworldState } from "./modules/westworld/models";
import { IssLocationState } from "./modules/issStation/models";

export interface ApplicationState {
  westworldSlice: WestworldState;
  issStationSlice: IssLocationState;
}
