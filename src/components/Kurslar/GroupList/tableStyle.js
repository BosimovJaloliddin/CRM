import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";
import del from "../../../assets/icons/delete.svg?react";

export const Title = styled.div`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${({ color }) => (color ? color : "#253e5f")};
`;
export const Status = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: ${({ active }) => (active ? "#52C41A" : "#FAAD14")};

  &::before {
    display: inline-block;
    content: " ";
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "#52C41A" : "#FAAD14")};
  }
`;
export const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  padding: 4px 12px;
  color: #ffffff;
  border-radius: 16px;
  background-color: ${({ time }) => (time ? "#91D5FF" : "#1890FF")};
`;
export const Del = styled(del)`
  padding: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const Edit = styled(edit)`
  padding: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
