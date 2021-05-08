import { Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PortraitScrollBar from "../PortraitScrollBar/PortraitScrollBar";
import StarsAndShards from "../StarsAndShards/StarsAndShards";

const DrawerContent = (props) => {
  const [selectedChar, selectChar] = useState(false);
  const [selectedStars, selectStars] = useState(false);
  const [selectedShards, selectshards] = useState(false);
  useEffect(() => {}, [selectedChar]);

  const handleSelectChar = (charName) => {
    selectChar(charName);
  };

  const handleSelectStars = (stars) => {
    selectStars(stars);
    console.log(stars);
  };

  return (
    <div style={{ backgroundColor: "#212121", color: "white", maxWidth: 500 }}>
      <Divider />
      <PortraitScrollBar
        charList={props.charList}
        handleSelectChar={handleSelectChar}
        selectedChar={selectedChar}
        storeValue={props.storeValue}
      />
      <Divider />
      <StarsAndShards
        handleSelectStars={handleSelectStars}
        selectedChar={selectedChar}
        selectedStars={selectedStars}
      />
    </div>
  );
};

export default DrawerContent;
