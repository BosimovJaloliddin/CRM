import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

import { Body, Container, LogOut, Logo, Side, Wrapper } from "./style";
import Profile from "./profile";

const Sidebar = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <Container>
      <Side onClick={onClickLogo}>
        <Logo>CRM</Logo>
        <Profile />

        <LogOut>Chiqish</LogOut>
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
