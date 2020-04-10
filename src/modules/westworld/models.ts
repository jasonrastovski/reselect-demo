export interface WestWorldInformation {
  type: string;
  language: string;
  runtime: number;
  image: { medium: string };
  summary: string;
  episodes: [
    {
      id: number;
      name: string;
      season: number;
      number: number;
      image: { medium: string };
      _links: { self: string };
    }
  ];
}

export interface ISSLocation {
  latitude: number;
  longitude: number;
  timestamp: Date;
}

export interface ApplicationState {
  westworldInformation: WestWorldInformation;
  iSSLocation: ISSLocation;
  isFetchingWestworldInformation: boolean;
  errorFetchingWestworldInformation: string;
}

export interface GetWestworldDetailsSuccess {
  westworldInformation: {};
}

export interface GetWestworldDetailsFailure {
  errorFetchingWestworldInformation: string;
}

export {};
