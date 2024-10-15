/* eslint-disable react/prop-types */
import { useState } from "react";
import GenericTable from "../../../Generic/Table";
import GenericButton from "../../../Generic/Button";
import BreadCrump from "../../BreadCrump";
import CallConfigModal from "./modal";

const CallConfig = () => {
  const [open, setOpen] = useState(false);

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
  const onSave = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CallConfigModal open={open} onClose={onClose} onSave={onSave} />
      <BreadCrump>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Rang qo&apos;shish
        </GenericButton>
      </BreadCrump>
      <GenericTable
        checkbox={false}
        headCells={cells}
        rows={rows}
      ></GenericTable>
    </>
  );
};

export default CallConfig;
