import { Drawer, Grid } from "@material-ui/core";
import React, { Component } from "react";
import CharacterSelect from "../CharacterSelect/CharacterSelect";
import DrawerContent from "../DrawerContent/DrawerContent";
import Characters from "../../Assets/characterDB/Characters.json";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charList: [],
      sidebarOpen: false,
      guild: {
        character: "",
        stars: null,
        shards: null,
      },
      storeValue: null,
    };
  }

  handleClick = (event, open, storeValue) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    let newCharList = [];
    console.log(open);
    if (open) {
      newCharList = this.state.charList;
      Characters.characters.map((character) => {
        if (character.stores.indexOf(storeValue) > -1) {
          return newCharList.push(character);
        }
        else {
          return null
        }
      });
    }

    this.setState({ charList: newCharList, storeValue: storeValue }, () => {
      this.setState({ sidebarOpen: open });
    });
  };

  render() {
    return (
      <div className="main">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <CharacterSelect
            handleClick={this.handleClick}
            storeName={"Guild Store"}
            storeValue={"guild"}
          />
          <CharacterSelect handleClick={this.handleClick} 
          storeName={"Fleet Arena Store"}
          storeValue={"fleet"}/>
          <CharacterSelect handleClick={this.handleClick} />
        </Grid>
        <Drawer
          anchor={"right"}
          open={this.state.sidebarOpen}
          onClose={(e) => this.handleClick(e, false)}
        >
          <DrawerContent
            charList={this.state.charList}
            storeValue={this.state.storeValue}
          />
        </Drawer>
      </div>
    );
  }
}

export default Main;
