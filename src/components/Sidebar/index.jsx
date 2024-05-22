import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

import { Body, Container, Side, Wrapper } from "./style";

const Sidebar = () => {
  return (
    <Container>
      <Side>
        <h1>Sidebar</h1>
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
