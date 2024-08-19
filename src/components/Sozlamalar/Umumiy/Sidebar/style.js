import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
`;
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  overflow: hidden;
  border-right: 1px solid #f8fafc;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 31px;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 13px 35px;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  text-decoration: none;
  color: ${({ active }) =>
    active ? "var(--activeColor)" : "var(--primaryColor)"};
  background-color: ${({ active }) => active && "#f8fafc"};
  .sub-icon {
    & path {
      fill: ${({ active }) =>
        active ? "var(--activeColor)" : "var(--primaryColor)"};
    }
  }

  &:hover {
    background-color: #f8fafc;
    color: var(--activeColor);

    .sub-icon {
      & path {
        fill: var(--activeColor);
      }
    }
  }
`;
