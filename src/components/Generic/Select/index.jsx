/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const GenericSelect = (props) => {
  const { data } = props;
  const [defaultVal, setDefaultVal] = useState(
    props?.value || (data && data[0].value)
  );
  const handleChange = ({ target: { value } }) => {
    setDefaultVal(value);
  };
  return (
    <FormControl
      sx={{ m: 1, minWidth: "120px", width: "150px" }}
      size="small"
      fullWidth
    >
      <Select
        sx={{ color: "#929faf", borderColor: "#929faf" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultVal || "Select"}
        onChange={handleChange}
      >
        {data?.map((data) => (
          <MenuItem key={data?.value} value={data?.value}>
            {data?.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
