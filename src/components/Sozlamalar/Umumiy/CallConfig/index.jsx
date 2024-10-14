/* eslint-disable react/prop-types */
import { useState } from "react";
import GenericTable from "../../../Generic/Table";

const CallConfig = () => {
  const [open] = useState(true);

  const cells = [
    {
      id: "type",
      label: "Belgilash turi",
    },
    {
      id: "color",
      label: "Ranglar",
      align: "right",
      render: (props) => {
        return (
          <input
            style={{
              width: "30px",
              height: "30px",
              border: 0,
            }}
            type="color"
            defaultValue={props?.color}
          />
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      type: "Missed",
      color: "#0cf70c",
    },
    {
      id: 2,
      type: "Answerd",
      color: "#0738d7",
    },
    {
      id: 3,
      type: "Wrong",
      color: "#eb0f0f",
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

export default CallConfig;
