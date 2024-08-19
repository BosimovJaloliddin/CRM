/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Modal from "../../Generic/Modal";
import GenericInput from "../../Generic/Input";
import Subtitle from "../../Generic/Subtitle";
import GenericSelect from "../../Generic/Select";
import Title from "../../Generic/Title";
import MultipleSelect from "./Multiselect";
// import MultipleSelect from "./Multiselect";

export const CourseModal = (props) => {
  const { data } = props;
  const selectData = data && [
    { value: "Frontend", title: "Frontend" },
    { value: "Backend", title: "Backend" },
  ];
  return (
    <Modal {...props}>
      <Title size="34px">Kurs Qo'shish</Title>
      {/* Darajalar */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Darajalar
      </Subtitle>
      <GenericSelect data={selectData} width={"100%"} value={data?.date} />
      {/* Hafta kunlari */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Hafta kunlari
      </Subtitle>
      {/* <MultipleSelect /> */}
      <MultipleSelect />

      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Boshlanish vaqti
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Tugash vaqti
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />
      {/* Ustozlar */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Ustozlar
      </Subtitle>
      {/* <MultipleSelect /> */}
      <MultipleSelect />
    </Modal>
  );
};

export default CourseModal;
