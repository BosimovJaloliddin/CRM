/* eslint-disable react/prop-types */
import StatusModal from "./StatusModal";
import { useEffect, useState } from "react";
import { Icon } from "./style";

const Status = ({ value }) => {
  switch (value) {
    case "keldi":
      return <Icon.Keldi />;
    case "sababsiz":
      return <Icon.Sababli />;
    case "sababli":
      return <Icon.Sababsiz />;
    case "birinchi-dars":
      return <Icon.Birinchi />;
  }
  return null;
};

const StatusWrapper = ({ value }) => {
  const [open, setOpen] = useState(false);
  const [align, setAlign] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpen(false);
    });
  }, []);
  return (
    <div
      onClick={(e) => {
        setAlign({ x: e.pageX, y: e.pageY });
        setOpen(true);
      }}
      style={{ width: "fit-content" }}
    >
      <StatusModal open={open} align={align} />
      <Status value={value} />
    </div>
  );
};

export default StatusWrapper;
