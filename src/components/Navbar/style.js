import styled from "styled-components";
import search from "../../assets/icons/search.svg?react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 0 16px 0 24px;
  height: 60px;
  background-color: #ffffff;
  /* border: 2px solid green; */
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  /* width: fit-content; */
  height: 40px;
  padding: 2px;
  border: 1px solid var(--secondaryColor);
  border-radius: 8px;
`;
const Input = styled.input`
  flex: 1;
  height: 38px;
  outline: none;
  border-radius: 8px;
  border: 0;
  background-color: transparent;

  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #bbc3cd;
  ::placeholder {
    font-size: 14px;
    line-height: 20px;
    color: #bbc3cd;
  }
`;
const SearchIcon = styled(search)`
  margin: 0 16px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// TIME
const TimerWrapper = styled.div`
  display: flex;
  gap: 6px;
`;
const Timer = styled.div`
  color: ${({ status }) =>
    status ? "var(--primaryColor)" : "var(--secondaryColor)"};
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
`;

export {
  Container,
  InputWrapper,
  Input,
  SearchIcon,
  Section,
  TimerWrapper,
  Timer,
};
