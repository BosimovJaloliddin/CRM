/* eslint-disable react/prop-types */
import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import DateTimePicers from "../../Navbar/DateTimePicers";
import Status from "./Status";
import { students } from "../../../mock/students";
import { Container } from "./style";

const Checkin = () => {
  const [rows] = useState(students);

  const headCells = [
    { id: "name", label: "Ism" },
    { id: "phone", label: "Telefon raqam" },
    {
      id: "28-07",
      label: "28-07",
      render: (res) => <Status value={res["28-07"]} />,

      align: "center",
    },
    {
      id: "29-07",
      label: "29-07",
      render: (res) => <Status value={res["29-07"]} />,
      align: "center",
    },
    {
      id: "30-07",
      label: "30-07",
      render: (res) => <Status value={res["30-07"]} />,
      align: "center",
    },
    {
      id: "31-07",
      label: "31-07",
      render: (res) => <Status value={res["31-07"]} />,
      align: "center",
    },
    {
      id: "01-07",
      label: "01-07",
      render: (res) => <Status value={res["01-07"]} />,
      align: "center",
    },
    {
      id: "02-07",
      label: "02-07",
      render: (res) => <Status value={res["02-07"]} />,
      align: "center",
    },
    {
      id: "03-07",
      label: "03-07",
      render: (res) => <Status value={res["03-07"]} />,
      align: "center",
    },
    {
      id: "04-07",
      label: "04-07",
      render: (res) => <Status value={res["04-07"]} />,
      align: "center",
    },
    {
      id: "05-07",
      label: "04-07",
      render: (res) => <Status value={res["04-07"]} />,
      align: "center",
    },
    {
      id: "06-07",
      label: "04-07",
      render: (res) => <Status value={res["04-07"]} />,
      align: "center",
    },
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
