/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount, headCells, checkbox } =
    props;

  return (
    <TableHead>
      <TableRow>
        {checkbox && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
              sx={{
                color: "#BBC3CD",
              }}
            />
          </TableCell>
        )}
        {headCells.map((headCell) => (
          <TableCell
            sx={{
              fontSize: "16px",
              color: "#929FAF",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            key={headCell.id}
            align={headCell?.align || "left"}
            padding={"normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function GenericTable(props) {
  const { headCells, rows, open, children, checkbox = true, url } = props;
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    if (checkbox) {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
      setSelected(newSelected);
    } else {
      url && navigate(url, { state: { parent: "Guruhlar", child: "Checked" } });
    }
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={
          open
            ? {
                marginTop: "24px",
                marginBottom: "8px",
                display: "flex",
                gap: 5,
              }
            : { overflow: "hidden", height: 0 }
        }
      >
        {children}
      </Box>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
              headCells={headCells}
              checkbox={checkbox}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {checkbox && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                          sx={{
                            color: "#BBC3CD",
                          }}
                        />
                      </TableCell>
                    )}
                    {headCells.map((val) => (
                      <TableCell
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#253E5F",
                        }}
                        align={val?.align || "left"}
                        key={val.id}
                      >
                        {val.render ? val.render(row) : row[val.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
              {rows.length < 1 && (
                <TableRow>
                  <TableCell align="center" colSpan={6}>
                    No data
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default GenericTable;
