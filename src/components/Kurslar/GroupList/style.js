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

// STATUS MODAL
// export const ModalContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   left: ${({ x }) => x && `${x}px`};
//   top: ${({ y }) => y && `${y}px`};
//   width: 200px;
//   max-height: 200px;
//   margin: 35px 0 0 -100px;
//   background: white;
//   border: 1px solid #f0f0f0;
//   border-radius: 8px;
// `;
// const ArrowModal = styled.div`
//   position: absolute;
//   width: 32px;
//   height: 32px;
//   align-self: center;
//   margin-top: -16px;
//   transform: rotate(-45deg);
//   border: 1px solid #f0f0f0;
//   border-color: #f0f0f0 #f0f0f0 transparent transparent;
//   background-color: white;
// `;
// const ModalBox = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 16px;
//   font-weight: 500;
//   padding: 18px 15px;
//   color: var(--primaryColor);

//   &:hover {
//     background-color: #f8fafc;
//   }
// `;

export const Devider = styled.div`
  display: flex;
  margin-top: 16px;
`;

Devider.Role = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  /*
  border: 1px solid #91d5ff;
   border-left: 0;
  border-radius: 0px 8px 8px 0px; */
`;
Devider.Filiallar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 8px;
`;

Devider.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #253e5f80;
`;

export const Section = styled.div`
  display: flex;
  /* padding: 12px 0; */
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 4px 0 0 4px;
  background-color: #f8fafc;
  height: 40px;
`;

export const Input = styled.input`
  height: 40px;
  outline: none;
  border: 1px solid #f0f0f0;
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  padding-left: 15px;
`;

export { Container, Action, Icon };
