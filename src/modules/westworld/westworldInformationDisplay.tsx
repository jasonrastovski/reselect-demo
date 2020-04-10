import React, { useEffect, useState } from "react";
import { store } from "../../store";
import { getWestworldDetailsSuccess, getWestworldDetailsInit } from "./actions";
import { WestWorldInformation, ApplicationState } from "./models";
import { connect } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";

interface WestWorldInformationProps {
  westWorldInformation: WestWorldInformation;
  isFetchingWestworldInformation: boolean;
  errorFetchingWestworldInformation: string;
}

const WestWorldInformationDisplay: React.FunctionComponent<WestWorldInformationProps> = (
  props: WestWorldInformationProps
) => {
  const [currentSeason, setCurrentSeason] = useState(1);

  useEffect(() => {
    console.log("about to dispatch Init");
    store.dispatch(getWestworldDetailsInit());

    fetch("http://api.tvmaze.com/singlesearch/shows?q=westworld&embed=episodes")
      .then((response) => response.json())
      .then((json) => {
        console.log("about to dispatch Success");
        return store.dispatch(
          getWestworldDetailsSuccess({
            westworldInformation: {
              ...json,
            } as WestWorldInformation,
          })
        );
      });
  }, []);

  const westWorldInformation = props.westWorldInformation;
  const currentSeasonEpisodes = westWorldInformation.episodes?.filter(
    (episode) => episode.season === currentSeason
  );

  const maxSeason = Math.max.apply(
    Math,
    westWorldInformation.episodes?.map((episode) => episode.season)
  );

  console.log("rendering...", props);
  return props.isFetchingWestworldInformation ? null : (
    <Card>
      <CardMedia
        component="img"
        alt="Westworld Image"
        height="140"
        image={westWorldInformation.image?.medium}
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

const mapStateToProps = (state: ApplicationState) => ({
  westWorldInformation: state.westworldInformation,
  isFetchingWestworldInformation: state.isFetchingWestworldInformation,
  errorFetchingWestworldInformation: state.errorFetchingWestworldInformation,
});

export default connect(mapStateToProps)(WestWorldInformationDisplay);
