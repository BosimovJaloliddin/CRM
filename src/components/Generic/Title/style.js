import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: ${({ type }) => (!type || type === "primary" ? 600 : 400)};
  line-height: 28px;
  text-align: left;
  color: ${({ color }) => (color ? color : "var(--primaryColor)")};

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
