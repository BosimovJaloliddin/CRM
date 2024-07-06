/* eslint-disable react/prop-types */
import GenericInput from "../../Generic/Input";
import Modal from "../../Generic/Modal";
import GenericSelect from "../../Generic/Select";
import Subtitle from "../../Generic/Subtitle";

const AllLidsModal = (props) => {
  const { data } = props;
  const selectData = data && [
    {
      value: "Front",
      title: "Frontend",
    },
    {
      value: "Beckend",
      title: "Beckend",
    },
  ];
  return (
    <Modal {...props}>
      {/* full name */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Studentning ismi
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />

      {/* Yo'nalish */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Yo&apos;nalishni tanlang
      </Subtitle>
      <GenericSelect data={selectData} value={data?.group} width="100%" />

      {/* Daraja */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Darajangizni tanlang
      </Subtitle>
      <GenericSelect data={selectData} value={data?.level} width="100%" />

      {/* kun */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Kunni tanlang
      </Subtitle>
      <GenericSelect data={selectData} value={data?.days} width="100%" />

      {/* kelish sanasi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Boshlash sanasini tanlang
      </Subtitle>
      <GenericSelect data={selectData} value={data?.date} width="100%" />

      {/* Izoh */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Izoh
      </Subtitle>
      <GenericInput fontWeight={500} width={500} />
    </Modal>
  );
};

export default AllLidsModal;
