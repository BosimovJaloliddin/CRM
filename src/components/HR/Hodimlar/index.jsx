import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import GenericButton from "../../Generic/Button";
// import GenericSelect from "../../Generic/Select";
import AllLidsModal from "./modal";
import { Action, Container } from "./style";

const Hodimlar = () => {
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
    { id: "name", label: "To'liq isim" },
    { id: "birthDate", label: "Tug'ilgan sanasi" },
    { id: "jinsi", label: "Jinsi" },
    { id: "role", label: "Vazifasi" },
    { id: "tel", label: "Telefon raqam" },
    { id: "filial", label: "Filial" },
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
      name: "Holid Toshmatov",
      birthDate: "12.02.1997",
      jinsi: "erkak",
      role: "O'qituvchi",
      tel: "+998 99 479 1909",
      filial: "Sirdaryo, Guliston",
    },
    {
      id: 2,
      name: "Nodit Toshmatov",
      birthDate: "12.02.1992",
      jinsi: "erkak",
      role: "O'qituvchi",
      tel: "+998 99 479 1909",
      filial: "Chilonzor",
    },
    {
      id: 3,
      name: "Nemat Holmatov",
      birthDate: "12.02.1995",
      jinsi: "erkak",
      role: "O'qituvchi",
      tel: "+998 99 479 1909",
      filial: "Yunusabod",
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
          Hodim qo&apos;shish
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

export default Hodimlar;
