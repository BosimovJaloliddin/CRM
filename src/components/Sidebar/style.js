import styled from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";

const Arrow = styled(arrow)`
  display: flex;
  margin-left: auto;
  transition: all 0.1s;

  transform: ${({ active }) => active && "rotate(90deg)"};
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
  flex: 1;
`;
const Wrapper = styled.div`
  margin: 16px;
  background-color: white;
  border: 2px solid blue;
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
`;
const LogOut = styled(Logo)`
  border-bottom: 0;
  border-top: 1px solid rgb(248, 250, 252, 1);
  position: sticky;
  bottom: 0;
  margin-top: auto;
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
const MenuItem = styled.div`
  display: flex;
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--primaryColor);
  cursor: pointer;
  padding: 12px 24px;

  &:hover {
    background-color: rgba(248, 250, 252, 1);
    color: var(--activeColor);
    path {
      fill: var(--activeColor);
    }
  }
`;
const ChildWrapper = styled.div`
  height: ${({ active }) => (active ? "auto" : "0")};
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
  ProfileContainer,
  Menu,
};
