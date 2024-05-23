import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Profile from "./profile";
import sidebar from "../../utils/sidebar";

import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
  ExitIcon,
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
  const location = useLocation();

  useEffect(() => {
    let path = JSON.parse(localStorage.getItem("open"));
    setOpen(path || []);
  }, []);

  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    navigate("/");
  };

  const onClickParent = ({ id, children, path }, e) => {
    if (open.includes(id)) {
      const data = open.filter((val) => val !== id);
      localStorage.setItem("open", JSON.stringify(data));
      setOpen(data);
    } else {
      setOpen([...open, id]);
      localStorage.setItem("open", JSON.stringify([...open, id]));
    }

    if (!children) {
      e.preventDefault();
      navigate(path);
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
            const active = open.includes(parent.id).toString();
            const activePath = location.pathname
              .includes(parent.path)
              .toString();
            return (
              <React.Fragment key={parent.id}>
                <MenuItem
                  active={activePath}
                  onClick={(e) => onClickParent(parent, e)}
                >
                  <MenuItem.Title active={activePath}>
                    <Icon />
                    {parent.title}
                    {parent.children && <Arrow active={active} />}
                  </MenuItem.Title>
                </MenuItem>

                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem
                        active={`${location.pathname === child.path}`}
                        to={child.path}
                        key={child.id}
                      >
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </React.Fragment>
            );
          })}
        </Menu>

        <LogOut onClick={onClickLogOut}>
          <ExitIcon />
          Chiqish
        </LogOut>
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
