import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import AddIconStyle from "../../Styles/AddIconStyle";
import FabStyle from "../../Styles/FabStyle";
import "./CharacterSelect.css";

const CharacterSelect = () => {
  const handleClick = () => {
    console.log("here");
  };

  

  return (
    <div
      className="characterSelect-body"
    >
      <Fab color="primary" aria-label="add" onClick={() => {
        handleClick();
      }} style={FabStyle}>
        <AddIcon  style={AddIconStyle}/>
      </Fab>
    </div>
  );
};

export default CharacterSelect;
