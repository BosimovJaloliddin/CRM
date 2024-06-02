import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500px;
  line-height: 24px;
  color: var(--primaryColor);

  margin-top: ${({ mt }) => getValue(mt)};
  margin-left: ${({ ml }) => getValue(ml)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  padding-top: ${({ pt }) => getValue(pt)};
  padding-left: ${({ pl }) => getValue(pl)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-bottom: ${({ pb }) => getValue(pb)};
`;

export { Container };
