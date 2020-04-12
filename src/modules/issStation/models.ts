export interface ISSLocationInformation {
  message: string;
  timestamp: number;
  iss_position: { latitude: string; longitude: string };
}

export interface GetIssStationDetailsSuccessPayload {
  issLocationInformation: ISSLocationInformation;
}

export interface GetIssStationDetailsFailurePayload {
  errorFetchingIssStationInformation: string;
}

export interface IssLocationState {
  iSSLocationInformation: ISSLocationInformation;
  isFetchingIssStationInformation: boolean;
  errorFetchingIssStationInformation: string;
}
