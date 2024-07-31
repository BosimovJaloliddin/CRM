/* eslint-disable react/prop-types */
import { Checkbox } from "@mui/material";
import { roles } from "../../../mock/roles";
import GenericInput from "../../Generic/Input";
import Modal from "../../Generic/Modal";
// import GenericSelect from "../../Generic/Select";
import Subtitle from "../../Generic/Subtitle";
import { Box, RoleTitle, Section, Wrapper } from "./style";

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
            <Box key={title}>
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
            </Box>
          );
        })}
      </Wrapper>
    </Modal>
  );
};

export default AllLidsModal;
