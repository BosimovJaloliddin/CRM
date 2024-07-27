import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import GenericButton from "../../Generic/Button";
import { Action, Container } from "./style";
import AllLidsModal from "./modal";

const Guruhlar = () => {
  // const [open, setOpen] = useState(true);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const onEdit = (e, res) => {
    e.stopPropagation();
    setModalProps(res);
    setModal(!modalOpen);
  };
  const onDelete = (e) => {
    e.stopPropagation();
  };
  // const onMove = (e) => {
  //   e.stopPropagation();
  //   console.log("Move");
  // };
  const headCells = [
    {
      id: "group",
      label: "Guruh",
    },
    {
      id: "kurs",
      label: "Kurs",
    },
    {
      id: "level",
      label: "Daraja",
    },
    {
      id: "start",
      label: "Boshlanish",
    },
    {
      id: "end",
      label: "Tugash",
    },
    {
      id: "turi",
      label: "Turi",
    },
    {
      id: "completed",
      label: "Status",
      render: (res) => {
        const active = res.completed;
        return (
          <span style={{ color: active ? "green" : "red" }}>
            {active ? "Tugallangan" : "Tugallanmagan"}
          </span>
        );
      },
    },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={onDelete} />
          {/* <Action.Move onClick={onMove} /> */}
        </Action>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      group: "Frontend",
      kurs: "JavaScript",
      start: "15:00",
      end: "19:00",
      level: "Junior",
      turi: "offline",
      completed: true,
    },
    {
      id: 2,
      group: "Frontend",
      kurs: "JavaScript",
      start: "15:00",
      end: "19:00",
      level: "Junior",
      turi: "offline",
      completed: true,
    },
    {
      id: 3,
      group: "Frontend",
      kurs: "JavaScript",
      start: "15:00",
      end: "19:00",
      level: "Junior",
      turi: "offline",
      completed: false,
    },
    {
      id: 4,
      group: "Frontend",
      kurs: "JavaScript",
      start: "15:00",
      end: "19:00",
      level: "Junior",
      turi: "offline",
      completed: true,
    },
  ];

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

        <GenericButton onClick={onToggleModal} type="add">
          Guruh qo&apos;shish
        </GenericButton>
      </BreadCrump>
      <GenericTable
        open={open}
        headCells={headCells}
        rows={rows}
        checkbox={false}
      ></GenericTable>
    </Container>
  );
};

export default Guruhlar;
