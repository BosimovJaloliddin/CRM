import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500px;
  line-height: 24px;
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
const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 50%;
  margin-left: 8px;
  color: white;
  background-color: var(--activeColor);
`;

export { Container, Count };
