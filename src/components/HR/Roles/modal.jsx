/* eslint-disable react/prop-types */
import { Checkbox } from "@mui/material";
import { roles } from "../../../mock/roles";
import GenericInput from "../../Generic/Input";
import Modal from "../../Generic/Modal";
import Subtitle from "../../Generic/Subtitle";
import { RoleTitle, Section, Wrapper } from "./style";

const AllLidsModal = (props) => {
  const { data } = props;
  return (
    <Modal {...props}>
      {/* Darajasi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Darajasi
      </Subtitle>
      <GenericInput value={data?.name} fontWeight={500} width={500} />

      {/* Daraja izohi */}
      <Subtitle mt={16} mb={8} color="#929FAF">
        Daraja izohi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} />

      {/* Checkboxs */}
      <Wrapper>
        {roles.map(([title, role]) => {
          return (
            <div style={{ marginTop: "16px" }} key={title}>
              <RoleTitle>{title}</RoleTitle>
              {role.map(({ status, title }) => {
                return (
                  <Section key={title}>
                    <Checkbox
                      sx={{
                        padding: 0,
                      }}
                      defaultChecked={status}
                    />{" "}
                    {title}
                  </Section>
                );
              })}
            </div>
          );
        })}
      </Wrapper>
    </Modal>
  );
};

export default AllLidsModal;
