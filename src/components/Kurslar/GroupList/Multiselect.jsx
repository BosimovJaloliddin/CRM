import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MultipleSelect() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={personName}
        onChange={handleChange}
        style={{ height: "40px", width: "100%", maxWidth: "500px" }}
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              overflow: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {selected.map((value) => (
              <Chip
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#1890FF",
                  padding: "2px 0",
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "16px",
                }}
                key={value}
                label={value}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
