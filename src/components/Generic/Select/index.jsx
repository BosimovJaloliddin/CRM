/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const GenericSelect = (props) => {
  const { data, width } = props;
  const [defaultVal, setDefaultVal] = useState(
    props?.value || (data && data[0].value)
  );
  const handleChange = ({ target: { value } }) => {
    setDefaultVal(value);
  };
  return (
    <FormControl
      sx={{ minWidth: "120px", width: width || "150px" }}
      size="small"
      fullWidth
    >
      <Select
        sx={{ color: "#253E5F", borderColor: "#929faf", fontSize: "14px" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultVal || "Select"}
        onChange={handleChange}
      >
        {data?.map((data) => (
          <MenuItem
            sx={{ fontSize: "14px", color: "#253E5F" }}
            key={data?.value}
            value={data?.value}
          >
            {data?.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
