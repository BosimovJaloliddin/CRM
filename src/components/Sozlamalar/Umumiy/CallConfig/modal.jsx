/* eslint-disable react/prop-types */
import GenericInput from "../../../Generic/Input";
import Modal from "../../../Generic/Modal";
import GenericSelect from "../../../Generic/Select";
import Subtitle from "../../../Generic/Subtitle";

const CallConfigModal = (props) => {
  const { data } = props;
  const selectData = data && [
    {
      value: "Qizil",
      title: "Qizil",
    },
    {
      value: "Yashil",
      title: "Yashil",
    },
  ];

  return (
    <Modal {...props}>
      {/*  tur */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Belgilash turi
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />
      {/* Rang */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Rang
      </Subtitle>
      <GenericSelect data={selectData} value={data?.group} width="100%" />
    </Modal>
  );
};

export default CallConfigModal;
