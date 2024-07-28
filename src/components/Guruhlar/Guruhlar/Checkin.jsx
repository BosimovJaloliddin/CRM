import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import DateTimePicers from "../../Navbar/DateTimePicers";
import { students } from "../../../mock/students";
import { Container } from "./style";
import { useState } from "react";

const Checkin = () => {
  const [rows, setRows] = useState(students);
  const headCells = [
    { id: "name", label: "Ism" },
    { id: "phone", label: "Telefon raqam" },
  ];

  return (
    <Container>
      <BreadCrump>
        {/* <GenericButton onClick={() => setOpen(!open)} type="filter">
          Filter
        </GenericButton> */}
        {/* <GenericButton onClick={onToggleModal} type="add">
          Xona qo&apos;shish
        </GenericButton> */}
        <DateTimePicers />
      </BreadCrump>
      <GenericTable
        headCells={headCells}
        rows={rows}
        checkbox={false}
      ></GenericTable>
    </Container>
  );
};

export default Checkin;
