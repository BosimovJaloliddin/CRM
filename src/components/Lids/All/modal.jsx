import GenericInput from "../../Generic/Input";
import Modal from "../../Generic/Modal";
import GenericSelect from "../../Generic/Select";
import Subtitle from "../../Generic/Subtitle";

const AllLidsModal = (props) => {
  return (
    <Modal {...props}>
      {/* full name */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Studentning ismi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} />

      {/* Yo'nalish */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Yo&apos;nalishni tanlang
      </Subtitle>
      <GenericSelect width="100%" />

      {/* Daraja */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Darajangizni tanlang
      </Subtitle>
      <GenericSelect width="100%" />

      {/* kun */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Kunni tanlang
      </Subtitle>
      <GenericSelect width="100%" />

      {/* guruh */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Guruhni tanlang
      </Subtitle>
      <GenericSelect width="100%" />

      {/* kelish sanasi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Boshlash sanasini tanlang
      </Subtitle>
      <GenericSelect width="100%" />

      {/* Izoh */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Izoh
      </Subtitle>
      <GenericInput fontWeight={500} width={500} />
    </Modal>
  );
};

export default AllLidsModal;
