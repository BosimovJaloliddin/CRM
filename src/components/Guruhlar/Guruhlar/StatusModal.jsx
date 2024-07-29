/* eslint-disable react/prop-types */
import { ArrowModal, ModalContainer } from "./style";

const StatusModal = ({ open }) => {
  return open ? (
    <ModalContainer>
      <ArrowModal />
      <div style={{ marginTop: "16px" }}> StatusModal</div>
    </ModalContainer>
  ) : null;
};

export default StatusModal;
