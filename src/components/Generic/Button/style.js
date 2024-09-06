import styled from "styled-components";

import imp from "../../../assets/icons/import.svg?react";
import filter from "../../../assets/icons/filter.svg?react";
import add from "../../../assets/icons/add.svg?react";

export const Icon = styled.img``;

Icon.Imp = styled(imp)``;
Icon.Filter = styled(filter)``;
Icon.Add = styled(add)``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  margin-left: ${({ ml }) => ml && `auto`};
  margin-top: ${({ mt }) => mt && `${mt}px`};

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 16px;

  color: #253e5f;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid var(--primaryColor);
  -webkit-user-select: none;
  user-select: none;

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
`;

Button.Import = styled(Button)`
  background-color: white;
  border: 0;
`;

Button.Filter = styled(Button)`
  background-color: var(--primaryColor);
  color: white;
  border: 0;
  path {
    fill: white;
  }
`;
Button.Primary = styled(Button)`
  background-color: var(--activeColor);
  color: white;
  border: 0;
`;

Button.Delete = styled(Button)`
  border: 1px solid #ffa39e;
  color: #f5222d;
`;

Button.Add = styled(Button)`
  background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : "var(--activeColor)"};
  color: white;
  border: 0;
`;
