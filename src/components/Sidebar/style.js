import { NavLink } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";
import exitIcon from "../../assets/icons/exit.svg?react";

const Arrow = styled(arrow)`
  display: flex;
  margin-left: auto;
  transition: all 0.1s;

  transform: ${({ active }) => active === "true" && "rotate(90deg)"};
`;

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Body = styled.div`
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  flex: 1;
`;
const Wrapper = styled.div`
  margin: 16px;
  background-color: white;
  border-radius: 8px;
`;
const Logo = styled.div`
  position: sticky;
  top: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(24, 144, 255, 1);
  padding: 16px 24px;
  background-color: white;
  border-bottom: 1px solid rgb(248, 250, 252, 1);
  cursor: pointer;
  z-index: 999;
`;
const LogOut = styled(Logo)`
  display: flex;
  align-items: center;
  border-bottom: 0;
  border-top: 1px solid rgb(248, 250, 252, 1);
  position: sticky;
  bottom: 0;
  margin-top: auto;
`;

const ExitIcon = styled(exitIcon)`
  margin-right: 16px;
`;

// PROFILE

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 23px 24px 32px 24px;
`;

ProfileContainer.Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
ProfileContainer.Name = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--primaryColor);

  width: 168px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
ProfileContainer.Email = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: var(--secondaryColor);

  width: 168px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// MENU

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: var(--primaryColor);

  background-color: ${({ active }) =>
    active === "true" ? " rgba(248, 250, 252, 1)" : "inherit"};
  color: ${({ active }) =>
    active === "true" ? "var(--activeColor)" : "var(--primaryColor)"};
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  padding: 12px 24px;

  &:hover {
    background-color: rgba(248, 250, 252, 1);
    color: var(--activeColor);
    path {
      fill: var(--activeColor);
    }
  }

  path {
    fill: ${({ active }) =>
      active === "true" ? "var(--activeColor)" : "var(--primaryColor)"};
  }
`;
const ChildWrapper = styled.div`
  height: ${({ active }) => (active === "true" ? "auto" : "0")};
  overflow: hidden;
  margin-left: 36px;
`;

export {
  Arrow,
  Container,
  ChildWrapper,
  MenuItem,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  ExitIcon,
  ProfileContainer,
  Menu,
};
