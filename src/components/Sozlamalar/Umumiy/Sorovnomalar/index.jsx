/* eslint-disable react/prop-types */
import { useState } from "react";
import GenericTable from "../../../Generic/Table";
import { Status } from "./style";

const Sorovnomalar = () => {
  // const [url, setUrl] = useState({});
  const [open] = useState(true);

  const cells = [
    {
      id: "sorovnoma",
      label: "So'rov turlari",
    },
    {
      id: "all",
      label: "Barcha Lidlar",
      render: (props) => {
        return <Status>{props?.all}</Status>;
      },
    },
    {
      id: "accepted",
      label: "Konversiyar",
      render: (props) => {
        return <Status>{props?.accepted}</Status>;
      },
    },
    {
      id: "foiz",
      label: "Foiz",
      render: (props) => {
        return (
          <Status>{parseInt((props?.accepted / props?.all) * 100)} %</Status>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      sorovnoma: "Instagaram",
      all: 300,
      accepted: 200,
    },
    {
      id: 2,
      sorovnoma: "Telegram",
      all: 300,
      accepted: 230,
    },
    {
      id: 3,
      sorovnoma: "Youtube",
      all: 100,
      accepted: 60,
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

export default Sorovnomalar;
