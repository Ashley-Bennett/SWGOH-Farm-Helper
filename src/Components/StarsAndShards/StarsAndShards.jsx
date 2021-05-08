import {
  Divider,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Slider,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
}));

const StarsAndShards = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(30);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.handleSelectStars(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <div style={{ color: "white" }}>
      <FormControl
        className={classes.formControl}
        disabled={props.selectedChar ? false : true}
      >
        <InputLabel id="demo-simple-select-label">Stars</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
        </Select>
      </FormControl>
      <Divider />
      <FormControl
        className={classes.formControl}
        disabled={props.selectedStars ? false : true}
      >
        <InputLabel id="demo-simple-select-label">Shards</InputLabel>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          disabled={true}
        />
        <Input
          disabled={true}
          className={classes.input}
          value={value}
          margin="dense"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </FormControl>
    </div>
  );
};

export default StarsAndShards;
