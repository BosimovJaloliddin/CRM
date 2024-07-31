import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import GenericButton from "../../Generic/Button";
// import GenericSelect from "../../Generic/Select";
import AllLidsModal from "./modal";
import { Action, Container } from "./style";

const Roles = () => {
  // const [open, setOpen] = useState(true);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const onEdit = (e, res) => {
    e.stopPropagation();
    setModalProps(res);
    setModal(!modalOpen);
  };
  // const onDelete = (e) => {
  //   e.stopPropagation();
  // };
  const headCells = [
    { id: "daraja", label: "Daraja" },
    { id: "izoh", label: "Daraja izohi" },
    {
      id: "action",
      label: "",
      render: (res) => {
        return (
          <Action>
            <Action.Edit onClick={(e) => onEdit(e, res)} />
            <Action.Delete onClick={() => {}} />
            {/* <Action.Delete onClick={() => {}} /> */}
          </Action>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      daraja: "O'qtuvchi",
      izoh: "Frontend o'qituvchi",
    },
    {
      id: 2,
      daraja: "Adminstrator",
      izoh: "Uch ta filialni boshqaradi",
    },
    {
      id: 3,
      daraja: "Adminstrator",
      izoh: "Uch ta filialni boshqaradi",
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
          Ro&apos;l qo&apos;shish
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

export default Roles;
