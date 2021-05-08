import { Avatar, GridList } from "@material-ui/core";
import React from "react";

const PortraitScrollBar = (props) => {
  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    flexWrap: "wrap",
    overflow: "hidden",
  };

  const gridList = {
    flexWrap: "nowrap",
  };

  const avatarStyle = {
    height: 125,
    width: 125,
  };

  const avatarStyleSelected = {
    height: 125,
    width: 125,
    boxShadow: "0 0 10px yellow",
  };

  return (
    <div style={flexContainer}>
      <GridList style={gridList}>
        {props.charList.map((character) => {
          if (character.name === props.selectedChar) {
            return (
              <Avatar
                onClick={() => props.handleSelectChar(character.name)}
                style={avatarStyleSelected}
                src={character.img}
              />
            );
          } else {
            return (
              <Avatar
                onClick={() => props.handleSelectChar(character.name)}
                style={avatarStyle}
                src={character.img}
              />
            );
          }
        })}
      </GridList>
    </div>
  );
};

export default PortraitScrollBar;
