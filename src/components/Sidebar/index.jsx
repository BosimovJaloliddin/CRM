import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Profile from "./profile";
import sidebar from "../../utils/sidebar";

import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
  LogOut,
  Logo,
  Menu,
  MenuItem,
  Side,
  Wrapper,
} from "./style";

const Sidebar = () => {
  const [open, setOpen] = useState([]);
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    navigate("/");
  };

  const onClickParent = (id) => {
    if (open.includes(id)) {
      const data = open.filter((val) => val !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>CRM</Logo>
        <Profile />

        <Menu>
          {sidebar.map((parent) => {
            const { icon: Icon } = parent;
            const active = open.includes(parent.id);
            return (
              <>
                <MenuItem
                  key={parent.id}
                  onClick={() => onClickParent(parent.id)}
                >
                  <MenuItem.Title>
                    <Icon />
                    {parent.title}
                    {parent.children && <Arrow active={active} />}
                  </MenuItem.Title>
                </MenuItem>

                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child.id}>
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </>
            );
          })}
        </Menu>

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
