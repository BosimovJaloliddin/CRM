/* eslint-disable react/prop-types */
import GenericInput from "../../Generic/Input";
import Modal from "../../Generic/Modal";
// import GenericSelect from "../../Generic/Select";
import Subtitle from "../../Generic/Subtitle";
import MultipleSelect from "../GroupList/Multiselect";

const AllLidsModal = (props) => {
  const { data } = props;
  // const selectData = data && [
  //   {
  //     value: "Front",
  //     title: "Frontend",
  //   },
  //   {
  //     value: "Beckend",
  //     title: "Beckend",
  //   },
  // ];
  return (
    <Modal {...props}>
      {/* kurslar yo'nalaishi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Kurslar Yo&apos;nalishi
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />

      {/* kurslar yo'nalaishi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Filial
      </Subtitle>
      <MultipleSelect />
    </Modal>
  );
};

export default AllLidsModal;
