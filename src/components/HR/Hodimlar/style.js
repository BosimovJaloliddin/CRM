import styled, { css } from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";
import del from "../../../assets/icons/delete.svg?react";

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

const Action = styled.div`
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
Action.Delete = styled(del)`
  ${action}
`;

//
const Devider = styled.div`
  display: flex;
  margin-top: 16px;
`;
Devider.Role = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
Devider.Filiallar = styled.div`
  flex: 1;
`;

Devider.Title = styled.div`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #253e5f80;
`;
const Section = styled.div`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin: 12px 0;
  color: #253e5f;
`;

export { Container, Action, Devider, Section };
