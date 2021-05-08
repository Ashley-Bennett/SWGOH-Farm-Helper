import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import CharacterSelect from "../CharacterSelect/CharacterSelect";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <CharacterSelect />
          <CharacterSelect />
          <CharacterSelect />
        </Grid>
      </div>
    );
  }
}

export default Main;
