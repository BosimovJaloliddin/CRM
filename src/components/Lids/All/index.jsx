import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import GenericButton from "../../Generic/Button";
import GenericSelect from "../../Generic/Select";
import { Action, Container } from "./style";
import AllLidsModal from "./modal";

const AllLids = () => {
  const [open, setOpen] = useState(true);
  const [modalOpen, setModal] = useState(false);
  const onEdit = (e) => {
    e.stopPropagation();
    console.log("Edit");
  };
  const onMove = (e) => {
    e.stopPropagation();
    console.log("Move");
  };
  const headCells = [
    {
      id: "name",
      label: "O’quvchining ismi",
    },
    {
      id: "group",
      label: "Guruh / Fan",
    },
    {
      id: "date",
      label: "Dars kuni va vaqti",
    },
    {
      id: "addedDate",
      label: "Qo’shilgan sana",
    },
    {
      id: "moderator",
      label: "Moderator",
    },
    {
      id: "action",
      label: "",
      render: (
        <Action>
          <Action.Edit onClick={onEdit} />
          <Action.Move onClick={onMove} />
        </Action>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      name: "Jaloliddin",
      group: "Group One",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Jalol",
    },
    {
      id: 2,
      name: "Anvar",
      group: "Group 2",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Ali",
    },
    {
      id: 3,
      name: "Nodir",
      group: "Group 3",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Asad",
    },
    {
      id: 4,
      name: "Feruz",
      group: "Group 4",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Farrux",
    },
    {
      id: 5,
      name: "Feruz",
      group: "Group 4",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Farrux",
    },
    {
      id: 6,
      name: "Feruz",
      group: "Group 4",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Farrux",
    },
  ];
  const data = [
    {
      value: "all",
      title: "All",
    },
    {
      value: "rus",
      title: "Rus",
    },
    {
      value: "eng",
      title: "Eng",
    },
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
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
        />
        <GenericButton type="import">Import</GenericButton>
        <GenericButton onClick={() => setOpen(!open)} type="filter">
          Filter
        </GenericButton>
        <GenericButton onClick={onToggleModal} type="add">
          Lid qo&apos;shish
        </GenericButton>
      </BreadCrump>
      <GenericTable open={open} headCells={headCells} rows={rows}>
        <GenericSelect data={data} />
        <GenericSelect data={data} />
        <GenericSelect data={data} />
        <GenericSelect data={data} />
        <GenericSelect data={data} />
      </GenericTable>
    </Container>
  );
};

export default AllLids;
