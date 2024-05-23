import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

import { Body, Container, LogOut, Logo, Side, Wrapper } from "./style";
import Profile from "./profile";

const Sidebar = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    navigate("/");
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>CRM</Logo>
        <Profile />

        <LogOut onClick={onClickLogOut}>Chiqish</LogOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};

export default Sidebar;
