import React from "react";
import WestWorldInformationDisplay from "./modules/westworld/westworldInformationDisplay";
import { Container, Grid } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <WestWorldInformationDisplay />
        </Grid>
        <Grid item xs={6}>
          <div>ISS Information</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
