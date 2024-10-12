import styled from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(240, 240, 240, 1);
`;

const Fragment = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ mt = 0, mr = 0, mb = 0, ml = 0 }) =>
    `${mt}px ${mr}px ${mb}px ${ml}px`};
`;
const ArrowIcon = styled(arrow)`
  transform: ${({ left }) => left && "rotate(180deg)"};
  cursor: pointer;
  &:active {
    path {
      fill: var(--primaryColor);
    }
  }
`;

const DateCard = styled.div`
  width: 48px;
  height: 72px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px;

  background-color: ${({ active }) =>
    active === "true" ? "var(--activeColor)" : "white"};
  border-radius: 24px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
`;

export { Wrapper, Fragment, ArrowIcon, DateCard };
