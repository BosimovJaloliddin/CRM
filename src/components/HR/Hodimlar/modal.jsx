/* eslint-disable react/prop-types */
import { Checkbox } from "@mui/material";
import GenericInput from "../../Generic/Input";
import Modal from "../../Generic/Modal";
import GenericSelect from "../../Generic/Select";
import Subtitle from "../../Generic/Subtitle";
import { Devider, Section } from "./style";

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
        Ism
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />

      {/* Familiya */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Familiya
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />

      {/* Telefon raqami */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Telefon raqami
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />

      {/* Jinsi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Jinsi
      </Subtitle>
      <GenericSelect data={selectData} value={data?.days} width="100%" />

      {/* Tug'ilgan sanasi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Tug&apos;ilgan sanasi
      </Subtitle>
      <GenericSelect data={selectData} value={data?.days} width="100%" />

      {/* Vazifasi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        O&apos;qituvchini tanlang
      </Subtitle>
      <GenericSelect data={selectData} value={data?.date} width="100%" />

      {/* Foiz */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Foizni tanlang
      </Subtitle>
      <GenericSelect data={selectData} value={data?.date} width="100%" />

      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section>
            <Checkbox /> Chilonzor
          </Section>
          <Section>
            <Checkbox /> Chilonzor
          </Section>
          <Section>
            <Checkbox /> Chilonzor
          </Section>
          <Section>
            <Checkbox /> Chilonzor
          </Section>
          <Section>
            <Checkbox /> Chilonzor
          </Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Rollar</Devider.Title>
          <GenericSelect data={selectData} value={data?.date} width="100%" />
          <GenericSelect data={selectData} value={data?.date} width="100%" />
          <GenericSelect data={selectData} value={data?.date} width="100%" />
          <GenericSelect data={selectData} value={data?.date} width="100%" />
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default AllLidsModal;
