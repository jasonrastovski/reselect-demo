import React from "react";
import WestWorldInformationDisplay from "./modules/westworld/westworldDisplay";
import { Container, Grid } from "@material-ui/core";
import ISSDisplay from "./modules/issStation/issStationDisplay";

function App() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <WestWorldInformationDisplay />
        </Grid>
        <Grid item xs={6}>
          <ISSDisplay />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
