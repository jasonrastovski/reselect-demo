export interface WestWorldInformation {
  type: string;
  language: string;
  runtime: number;
  image: { medium: string; original: string };
  summary: string;
  episodes: [
    {
      id: number;
      name: string;
      season: number;
      number: number;
      image: {
        medium: string;
        original: string;
      };
      _links: { self: string };
    }
  ];
}

export interface GetWestworldDetailsSuccess {
  westworldInformation: {};
}

export interface GetWestworldDetailsFailure {
  errorFetchingWestworldInformation: string;
}

export interface WestworldState {
  westworldInformation: WestWorldInformation;
  isFetchingWestworldInformation: boolean;
  errorFetchingWestworldInformation: string;
}
