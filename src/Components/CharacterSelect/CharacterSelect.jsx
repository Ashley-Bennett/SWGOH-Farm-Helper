import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import AddIconStyle from "../../Styles/AddIconStyle";
import FabStyle from "../../Styles/FabStyle";
import "./CharacterSelect.css";

const CharacterSelect = (props) => {
  return (
    <div className="characterSelect-body">
      <h1>{props.storeName}</h1>
      <Fab
        color="primary"
        aria-label="add"
        onClick={(e) => props.handleClick(e, true, props.storeValue)}
        style={FabStyle}
      >
        <AddIcon style={AddIconStyle} />
      </Fab>
    </div>
  );
};

export default CharacterSelect;
