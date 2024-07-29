/* eslint-disable react/prop-types */
import { ArrowModal, Icon, ModalBox, ModalContainer } from "./style";

const StatusModal = ({ open, align }) => {
  return open ? (
    <ModalContainer x={align.x} y={align.y}>
      <ArrowModal />
      <div style={{ zIndex: 10 }}>
        <ModalBox>
          <Icon.Keldi /> Keldi
        </ModalBox>
        <ModalBox>
          <Icon.Birinchi /> Birinchi dars
        </ModalBox>
        <ModalBox>
          <Icon.Sababli /> Sababli
        </ModalBox>
        <ModalBox>
          <Icon.Sababsiz /> Sababsiz
        </ModalBox>
      </div>
    </ModalContainer>
  ) : null;
};

export default StatusModal;
