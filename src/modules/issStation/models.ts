export interface ISSLocationInformation {
  message: string;
  timestamp: number;
  iss_position: { latitude: string; longitude: string };
}

export interface GetIssStationDetailsSuccess {
  issLocationInformation: {};
}

export interface GetIssStationDetailsFailure {
  errorFetchingIssStationInformation: string;
}

export interface IssLocationState {
  iSSLocationInformation: ISSLocationInformation;
  isFetchingIssStationInformation: boolean;
  errorFetchingIssStationInformation: string;
}
