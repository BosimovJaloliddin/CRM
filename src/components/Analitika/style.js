import styled from "styled-components";
import getValue from "../../hooks/getStyleValue";
import Title from "../Generic/Title";
import arrowUp from "../../assets/icons/arrowUp.svg?react";

const getColor = (title) => {
  switch (title) {
    case "Talabalar":
      return {
        primary: "#52C41A",
        secondary: "#B7EB8F",
        ternary: "#F6FFED",
      };
    case "Mentorlar":
      return {
        primary: "#FADB14",
        secondary: "#FFE58F",
        ternary: "#FFFBE6",
      };
    case "Filiallar":
      return {
        primary: "#1890FF",
        secondary: "#91D5FF",
        ternary: "#E6F7FF",
      };
  }
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, "16px")};
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ gap }) => getValue(gap, "16px")};
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  background-color: ${({ title }) => getColor(title)?.ternary};
  border-radius: 8px;
`;
const Section = styled(Wrapper)`
  justify-content: space-between;
  align-items: center;
  gap: 0;
`;
const SectionWrap = styled.div`
  display: flex;
  align-items: center;

  .icon {
    width: 48px;
    height: 48px;
    padding: 8px;
    margin-right: 16px;
    border-radius: 6px;
    background-color: ${({ title }) => getColor(title)?.primary};
  }
`;
const Plus = styled.div`
  &::before {
    display: flex;
    align-items: center;
    justify-content: center;

    content: "+";
    width: 32px;
    height: 32px;
    font-size: 32px;
    font-weight: 600;
    color: white;
    background-color: ${({ title }) => getColor(title)?.secondary};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.15s linear;
  }
  &:active {
    transform: scale(0.97);
  }
`;
const Count = styled(Title)`
  font-size: 40px;
`;
const Arrow = styled(arrowUp)`
  width: 24px;
  height: 24px;
  margin-right: 13px;
`;

export { Container, Wrapper, Card, Section, SectionWrap, Plus, Count, Arrow };
