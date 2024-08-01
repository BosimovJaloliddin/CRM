import { useState } from "react";
import BreadCrump from "../../Generic/BreadCrump";
import GenericTable from "../../Generic/Table";
import GenericButton from "../../Generic/Button";
import AllLidsModal from "./modal";
import CollapsibleTable from "./Table";
import { rows } from "../../../mock/groups";
import { Action, Container } from "./style";

const GroupList = () => {
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
  const headCells = [
    { id: "title", label: "Kurslar turi" },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={onDelete} />
        </Action>
      ),
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
      {/* <GenericTable
        open={open}
        headCells={headCells}
        rows={rows}
        checkbox={false}
        url={"/guruhlar/guruhlar/checkin"}
      ></GenericTable> */}
      <CollapsibleTable rows={rows} cells={headCells} />
    </Container>
  );
};

export default GroupList;
