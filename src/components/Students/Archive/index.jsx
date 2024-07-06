import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import GenericButton from "../../Generic/Button";
import GenericSelect from "../../Generic/Select";
import { Action, Container } from "./style";
import AllLidsModal from "./modal";

const ArchiveStudents = () => {
  const [open, setOpen] = useState(true);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const onEdit = (e, res) => {
    e.stopPropagation();
    setModalProps(res);
    setModal(!modalOpen);
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
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
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
      days: "toq kunlari",
      level: "Junior",
    },
    {
      id: 2,
      name: "Anvar",
      group: "Group 2",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Ali",
      days: "toq kunlari",
      level: "Junior",
    },
    {
      id: 3,
      name: "Nodir",
      group: "Group 3",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Asad",
      days: "toq kunlari",
      level: "Junior",
    },
    {
      id: 4,
      name: "Feruz",
      group: "Group 4",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Farrux",
      days: "toq kunlari",
      level: "Junior",
    },
    {
      id: 5,
      name: "Feruz",
      group: "Group 4",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Farrux",
      days: "toq kunlari",
      level: "Junior",
    },
    {
      id: 6,
      name: "Feruz",
      group: "Group 4",
      date: "12.07.2024",
      addedDate: "10.01.2024",
      moderator: "Farrux",
      days: "toq kunlari",
      level: "Junior",
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

export default ArchiveStudents;
