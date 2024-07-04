import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid var(--secondaryColor);

  min-width: ${({ width }) => getValue(width)};
  max-width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height, "40px")};
  max-width: ${({ width }) => getValue(width)};
  border-radius: ${({ borderradius }) => getValue(borderradius, "4px")};
`;

const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: 0;
  outline: none;

  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height, "40px")};
  max-width: ${({ width }) => getValue(width)};
  font-size: ${({ fontSize }) => getValue(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineheight }) => getValue(lineheight)};
  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  border-radius: ${({ borderRadius }) => getValue(borderRadius, "4px")};
  padding-left: 8px;

  &::placeholder {
    font-size: ${({ placeholderStyle }) =>
      getValue(placeholderStyle?.fontSize)};
    font-weight: ${({ placeholderStyle }) =>
      getValue(placeholderStyle?.fontWeight)};
    line-height: ${({ placeholderStyle }) =>
      getValue(placeholderStyle?.lineHeight)};
    color: ${({ placeholderStyle }) =>
      placeholderStyle?.color ? placeholderStyle?.color : "#bbc3cd"};
  }
`;

export { Container, Input };
