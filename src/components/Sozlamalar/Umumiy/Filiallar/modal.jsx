/* eslint-disable react/prop-types */
import GenericInput from "../../../Generic/Input";
import Modal from "../../../Generic/Modal";
import Subtitle from "../../../Generic/Subtitle";

const FiliallarModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      {/*  name */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Nomi
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />
      {/* Manzili */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Manzili
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />
      {/* Sig'im */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Guruh sig&apos;imi
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />
      {/* talab */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Talab
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />{" "}
    </Modal>
  );
};

export default FiliallarModal;
