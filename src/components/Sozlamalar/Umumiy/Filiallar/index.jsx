/* eslint-disable react/prop-types */
import { useState } from "react";
import GenericTable from "../../../Generic/Table";
import BreadCrump from "../../BreadCrump";
import GenericButton from "../../../Generic/Button";
import FiliallarModal from "./modal";

const Filiallar = () => {
  // const [url, setUrl] = useState({});
  const [open, setOpen] = useState(false);

  const cells = [
    {
      id: "filiallar",
      label: "Filiallar",
    },
    {
      id: "location",
      label: "Manzil",
      align: "right",
      render: (props) => (
        <a
          style={{
            fontSize: "16px",
            fontWeight: 500,
            textAlign: "left",
            color: "#1890ff",
          }}
          href={props?.href}
          target="_blank"
        >
          {props?.location}
        </a>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      filiallar: "Chilonzor filiali",
      location: "Bunyodkor ko'ch, Toshkent sh",
      href: "https://maps.app.goo.gl/qcRLSsQdDQeLU7Fy7",
    },
    {
      id: 2,
      filiallar: "Olmozor filiali",
      location: "Bunyodkor ko'ch, Toshkent sh",
      href: "https://maps.app.goo.gl/zbXEiqQhPXhPVSnSA",
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
      <FiliallarModal open={open} onClose={onClose} onSave={onSave} />
      <BreadCrump>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Filial qo&apos;shish
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

export default Filiallar;
