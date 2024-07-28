import styled, { css } from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";
import del from "../../../assets/icons/delete.svg?react";
import keldi from "../../../assets/icons/keldi.svg?react";
import sababli from "../../../assets/icons/sababli.svg?react";
import sababsiz from "../../../assets/icons/sababsiz.svg?react";
import birinchi from "../../../assets/icons/birinchi.svg?react";

const action = css`
  padding: 10px;
  width: 42px;
  height: 42px;
  border-radius: 4px;
  transition: all 0.3s linear;
  &:hover {
    border: 1px solid var(--secondaryColor);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Container = styled.div``;

const Icon = styled.div``;
Icon.Keldi = styled(keldi)``;
Icon.Sababli = styled(sababli)``;
Icon.Sababsiz = styled(sababsiz)``;
Icon.Birinchi = styled(birinchi)``;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
Action.Edit = styled(edit)`
  ${action}
`;

Action.Delete = styled(del)`
  ${action}
`;

export { Container, Action, Icon };
