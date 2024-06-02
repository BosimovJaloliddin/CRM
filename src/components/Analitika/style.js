import styled from "styled-components";
import getValue from "../../hooks/getStyleValue";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, "16px")};
`;
const Card = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid red;
`;

export { Container, Wrapper, Card };
