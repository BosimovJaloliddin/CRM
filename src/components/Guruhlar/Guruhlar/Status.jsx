/* eslint-disable react/prop-types */
import StatusModal from "./StatusModal";
import { useEffect, useState } from "react";
import { Icon } from "./style";

const Status = ({ value }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpen(false);
    });
  }, []);
  switch (value) {
    case "keldi":
      return (
        <div onClick={() => setOpen(true)}>
          <StatusModal open={open} />
          <Icon.Keldi />
        </div>
      );
    case "sababsiz":
      return <Icon.Sababli />;
    case "sababli":
      return <Icon.Sababsiz />;
    case "birinchi-dars":
      return <Icon.Birinchi />;
  }
  return null;
};

export default Status;
