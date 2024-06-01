import styled from "styled-components";

const getValue = (value) => {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return `${value}px`;
    default:
      return "none";
  }
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid var(--secondaryColor);

  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  max-width: ${({ width }) => getValue(width)};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
`;

const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: 0;
  outline: none;

  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  max-width: ${({ width }) => getValue(width)};
  font-size: ${({ fontSize }) => getValue(fontSize)};
  font-weight: ${({ fontWeight }) => getValue(fontWeight)};
  line-height: ${({ lineHeight }) => getValue(lineHeight)};
  color: ${({ color }) => (color ? color : "#bbc3cd")};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};

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
