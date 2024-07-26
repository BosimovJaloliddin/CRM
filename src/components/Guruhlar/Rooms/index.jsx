import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import GenericButton from "../../Generic/Button";
// import GenericSelect from "../../Generic/Select";
import { Action, Container } from "./style";
import AllLidsModal from "./modal";

const Rooms = () => {
  // const [open, setOpen] = useState(true);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const onEdit = (e, res) => {
    e.stopPropagation();
    setModalProps(res);
    setModal(!modalOpen);
  };
  // const onMove = (e) => {
  //   e.stopPropagation();
  //   console.log("Move");
  // };
  const headCells = [
    {
      id: "rooms",
      label: "Xona",
    },
    {
      id: "capcity",
      label: "O'rinlar soni",
    },
    {
      id: "freetime",
      label: "Bo'sh vaqti",
      render: ({ freetime }) => {
        return (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {freetime?.map((val) => {
              return (
                <span
                  style={{
                    backgroundColor: "whitesmoke",
                    padding: "5px 8px",
                    borderRadius: "4px",
                  }}
                  key={val}
                >
                  {val}
                </span>
              );
            })}
          </span>
        );
      },
    },
    {
      id: "wifi",
      label: "WI-FI",
    },
    {
      id: "monitor",
      label: "Monitor",
    },
    {
      id: "blackboard",
      label: "Blackboard",
    },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={() => {}} />
          {/* <Action.Move onClick={onMove} /> */}
        </Action>
      ),
    },
  ];
  const rows = [
    {
      rooms: "Frontend",
      capcity: "20",
      freetime: ["12:00~17:00", "20:00"],
      wifi: "Bor",
      monitor: "Bor",
      blackboard: "Bor",
    },
    {
      rooms: "Frontend",
      capcity: "20",
      freetime: ["12:00~17:00", "20:00"],
      wifi: "Bor",
      monitor: "Bor",
      blackboard: "Bor",
    },
    {
      rooms: "Frontend",
      capcity: "20",
      freetime: ["12:00~17:00", "20:00"],
      wifi: "Bor",
      monitor: "Bor",
      blackboard: "Bor",
    },
  ];
  // const data = [
  //   {
  //     value: "all",
  //     title: "All",
  //   },
  //   {
  //     value: "rus",
  //     title: "Rus",
  //   },
  //   {
  //     value: "eng",
  //     title: "Eng",
  //   },
  // ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };
  const onSave = () => {
    // setModal(!modalOpen);
  };
  return (
    <Container>
      <BreadCrump>
        <AllLidsModal
          open={modalOpen}
          onClose={onToggleModal}
          onSave={onSave}
          data={modalProps}
        />
        {/* <GenericButton onClick={() => setOpen(!open)} type="filter">
          Filter
        </GenericButton> */}
        <GenericButton onClick={onToggleModal} type="add">
          Xona qo&apos;shish
        </GenericButton>
      </BreadCrump>
      <GenericTable
        open={open}
        headCells={headCells}
        rows={rows}
        checkbox={false}
      >
        {/* <GenericSelect data={data} />
        <GenericSelect data={data} />
        <GenericSelect data={data} />
        <GenericSelect data={data} />
        <GenericSelect data={data} /> */}
      </GenericTable>
    </Container>
  );
};

export default Rooms;
