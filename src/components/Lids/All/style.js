import styled, { css } from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";

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

export const Container = styled.div``;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
Action.Edit = styled(edit)`
  ${action}
`;
Action.Move = styled(edit)`
  ${action}
`;
