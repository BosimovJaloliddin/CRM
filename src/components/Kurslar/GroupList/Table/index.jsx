/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CourseModal from "../CourseModal";
import GenericButton from "../../../Generic/Button";
import { Del, Edit, Status, TimelineWrapper, Title } from "./style";

const styleCell = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
  border: 0,
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  const onAddKurs = (e) => {
    e.stopPropagation();
    setOpenAdd(!openAdd);

    console.log("hellow");
  };
  const onSave = (e) => {
    e.stopPropagation();

    setOpenAdd(!openAdd);
  };

  return (
    <React.Fragment>
      <CourseModal open={openAdd} onClose={onAddKurs} onSave={onSave} />

      <TableRow
        onClick={() => setOpen(!open)}
        sx={{
          "& > *": { borderBottom: "unset" },
          ":hover": { background: "#f8fafc", cursor: "pointer" },
        }}
      >
        <TableCell
          component="th"
          scope="row"
          sx={{
            display: "felx",
            justifyContent: "space-between",
            color: "#253e5f",
            fontWeight: 600,
            fontSize: "18px",
            border: 0,
          }}
        >
          {row.title}
        </TableCell>
        <TableCell
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            border: 0,
          }}
          align="right"
        >
          <GenericButton onClick={onAddKurs} type="add"></GenericButton>
          <Edit onClick={onAddKurs} />
          <Del />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: "8px 0" }}>
              <Table size="small" aria-label="purchases">
                {/* <TableHead>
                  <TableRow>
                    <TableCell>Location</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Schedule</TableCell>
                    <TableCell align="right">action</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  {row?.grops?.map((rw) => {
                    return (
                      <TableRow
                        key={rw.id}
                        sx={{
                          display: "flex",
                          // justifyContent: "space-around",
                          alignItems: "center",
                          width: "100%",
                          margin: "8px",
                          padding: "10px",
                          border: "1px solid #d8d9da",
                          borderRadius: "8px",
                        }}
                      >
                        <TableCell sx={styleCell}>
                          <Title>{rw.level}</Title>
                          <Status active={rw.started}>
                            {rw.started ? "Active" : "Soon"}
                          </Status>
                        </TableCell>
                        <TableCell sx={{ ...styleCell, flex: "2" }}>
                          <Title>{rw.filial}</Title>
                          <Title color={"#1890FF"}>{rw.location}</Title>
                        </TableCell>
                        <TableCell sx={{ ...styleCell, flex: "2", gap: "8px" }}>
                          <TimelineWrapper>
                            {rw.timeline.replaceAll(" ", " - ")}
                          </TimelineWrapper>
                          <TimelineWrapper time>{rw.time}</TimelineWrapper>
                        </TableCell>
                        <TableCell sx={{ ...styleCell, alignItems: "center" }}>
                          <Title color="#BBC3CD">O&apos;qituvchilar</Title>
                          <Title color="#929FAF">+2</Title>
                        </TableCell>
                        <TableCell sx={{ border: 0 }}>
                          <Title>
                            <Edit />
                          </Title>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable(props) {
  const { rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#929faf",
                fontSize: "16px",
              }}
            >
              Kurslar turi
            </TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { CollapsibleTable };
