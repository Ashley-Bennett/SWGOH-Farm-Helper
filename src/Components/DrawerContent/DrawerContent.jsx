import { Divider } from "@material-ui/core";
import React from "react";
import PortraitScrollBar from "../PortraitScrollBar/PortraitScrollBar";
import StarsAndShards from "../StarsAndShards/StarsAndShards";

const DrawerContent = (props) => {
  return (
    <div style={{ backgroundColor: "#212121", color: "white", maxWidth: 500 }}>
      <Divider />
      <PortraitScrollBar charList={props.charList} storeValue={props.storeValue}/>
      <Divider />
      <StarsAndShards />
    </div>
  );
};

export default DrawerContent;
