/* eslint-disable react/prop-types */
import { useState } from "react";
import GenericTable from "../../../Generic/Table";
import { TimeWrap } from "./style";
import { Switch } from "@mui/material";

const Xabarnomalar = () => {
  // const [url, setUrl] = useState({});
  const [open] = useState(true);

  const cells = [
    {
      id: "xabar",
      label: "Xabar turi",
    },
    {
      id: "time",
      label: "Vaqt",
      render: (props) => {
        return <TimeWrap>{props?.time}</TimeWrap>;
      },
    },
    {
      id: "active",
      label: "Faollashtirish",
      align: "right",
      render: (props) => {
        return <Switch defaultChecked={props?.active} />;
      },
    },
  ];
  const rows = [
    {
      id: 1,
      xabar: "Dars vaqtini eslatish",
      time: "15:00",
      active: true,
    },
    {
      id: 2,
      xabar: "Qoldirilgan vazifalar",
      time: "17:00",
      active: false,
    },
    {
      id: 3,
      xabar: "Qoldirilgan darslar",
      time: "11:00",
      active: false,
    },
  ];

  return (
    <GenericTable
      checkbox={false}
      open={open}
      headCells={cells}
      rows={rows}
    ></GenericTable>
  );
};

export default Xabarnomalar;
