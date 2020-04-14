import React, { useEffect, useState } from "react";
import { store } from "../../store";
import {
  getWestworldSuccess,
  getWestworldFailure,
  initWestworld,
} from "./actions";
import { WestWorldInformation } from "./models";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";

interface WestWorldProps {
  westWorldInformation: WestWorldInformation;
  isFetchingWestworldInformation: boolean;
  errorFetchingWestworldInformation: string;
}

export const WestWorldInformationDisplay: React.FunctionComponent<WestWorldProps> = (
  props: WestWorldProps
) => {
  const [currentSeason, setCurrentSeason] = useState(1);

  const getWestworldInformation = () => {
    store.dispatch(initWestworld());

    fetch("http://api.tvmaze.com/singlesearch/shows?q=westworld&embed=episodes")
      .then((response) => response.json())
      .then((json) => {
        return store.dispatch(getWestworldSuccess(json));
      })
      .catch((err) => store.dispatch(getWestworldFailure(err)));
  };

  useEffect(() => {
    getWestworldInformation();
  }, []);

  const westWorldInformation = props.westWorldInformation;
  const currentSeasonEpisodes = westWorldInformation.episodes?.filter(
    (episode) => episode.season === currentSeason
  );

  const maxSeason = Math.max.apply(
    Math,
    westWorldInformation.episodes?.map((episode) => episode.season)
  );

  const updateWestWorld = () => {
    getWestworldInformation();
  };
  console.log("Rendering WestWorldInformationDisplay...", props);
  return props.isFetchingWestworldInformation ? null : (
    <Card>
      <CardMedia
        component="img"
        alt="Westworld Image"
        height="140"
        image={westWorldInformation.image?.original}
        title="Westworld Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Westworld
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <span
            dangerouslySetInnerHTML={{
              __html: westWorldInformation.summary,
            }}
          ></span>
        </Typography>

        {currentSeasonEpisodes?.map((episode, index) => (
          <Typography key={index} variant="body2" color="textSecondary">
            Episode {episode.season}X{episode.number}: {episode.name}
          </Typography>
        ))}

        <Button color="primary" onClick={updateWestWorld}>
          Update
        </Button>

        <Grid container>
          <Grid item xs={6}>
            <IconButton
              aria-label="previous"
              disabled={currentSeason === 1}
              onClick={() => setCurrentSeason(currentSeason - 1)}
            >
              <NavigateBefore />
            </IconButton>
          </Grid>

          <Grid item xs={6}>
            <IconButton
              aria-label="next"
              disabled={currentSeason === maxSeason}
              onClick={() => setCurrentSeason(currentSeason + 1)}
            >
              <NavigateNext />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export const WestWorldInformationDisplayMemoed = React.memo(
  WestWorldInformationDisplay
);
