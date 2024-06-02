import styled from "styled-components";
import search from "../../assets/icons/search.svg?react";

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 0 16px 0 24px;
  height: 60px;
  background-color: #ffffff;
  /* border: 2px solid green; */
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

export { Container, SearchIcon, Section, TimerWrapper, Timer };
