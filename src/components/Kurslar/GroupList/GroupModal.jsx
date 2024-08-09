/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Checkbox } from "@mui/material";
import Modal from "../../Generic/Modal";
import GenericInput from "../../Generic/Input";
import Subtitle from "../../Generic/Subtitle";
import Title from "../../Generic/Title";
import { Devider, Input, Section } from "./style";

const GroupModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalish turi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />

      {/* Filial */}
      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section>
            <Checkbox /> Chilonzor
          </Section>
          <Section>
            <Checkbox /> Namangan
          </Section>
          <Section>
            <Checkbox /> Beruniy
          </Section>
          <Section>
            <Checkbox /> Ganga
          </Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Role</Devider.Title>
          <Input />
          <Input />
          <Input />
          <Input />
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default GroupModal;
