import { Avatar, GridList } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Characters from "../../Assets/characterDB/Characters.json";

import jango from "../../Assets/img/characters/JangoFett.png";

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

  return (
    <div style={flexContainer}>
        <GridList style={gridList}>
          {props.charList.map((character) => {
            return <Avatar style={avatarStyle} src={character.img} />;
          })}
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
          <Avatar style={avatarStyle} src={jango} />
        </GridList>
    </div>
  );
};

export default PortraitScrollBar;
