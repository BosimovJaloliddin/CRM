import styled from "styled-components";
import arrow from "../../../assets/icons/rightArrow.svg?react";

const getColor = (title) => {
  switch (title) {
    case "Lidlar":
      return "#F0F5FF";
    case "Talabalar":
      return "#F9F0FF";
    case "Guruhlar":
      return "#FCFFE6";
    case "HR":
      return "#FFF0F6";
    case "Kurslar":
      return "#E6FFFB";
    case "Sozlamalar":
      return "#FFF2E8";
    case "Moliya":
      return "#F0F5FF";
  }
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 8px 8px 0 0;
  background: ${({ title }) => getColor(title)};
`;
export const Arrow = styled(arrow)``;
export const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  button {
    cursor: pointer;
  }
`;
