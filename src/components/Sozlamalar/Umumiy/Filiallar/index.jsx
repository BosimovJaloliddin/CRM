/* eslint-disable react/prop-types */
import { useState } from "react";
import GenericTable from "../../../Generic/Table";

const Filiallar = () => {
  // const [url, setUrl] = useState({});
  const [open] = useState(true);

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
        <a href={props?.href} target="_blank">
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

  return (
    <GenericTable
      checkbox={false}
      open={open}
      headCells={cells}
      rows={rows}
    ></GenericTable>
  );
};

export default Filiallar;
