import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const GenericSelect = () => {
  const [lang, setLang] = useState("uzb");

  const handleChange = ({ target: { value } }) => {
    setLang(value);
  };
  return (
    <FormControl
      sx={{ m: 1, minWidth: "120px", width: "150px" }}
      size="small"
      fullWidth
    >
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lang}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem defaultChecked value={"uzb"}>
          Uzb
        </MenuItem>
        <MenuItem value={"rus"}>Rus</MenuItem>
        <MenuItem value={"eng"}>Eng</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
