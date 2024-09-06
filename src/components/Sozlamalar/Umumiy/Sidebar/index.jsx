import { Outlet, useLocation } from "react-router-dom";
import { umumiy } from "../../../../utils/sozlamalar";
import BreadCrump from "../../../Generic/BreadCrump";
import { Body, Container, Link, Sidebar, Wrapper } from "./style";

const UmumiySidebar = () => {
  const location = useLocation();
  return (
    <Container>
      <BreadCrump />
      <Wrapper>
        <Sidebar>
          {umumiy?.map((item) => {
            const { icon: Icon } = item;
            const active = location.pathname.includes(item.path);
            return (
              <Link
                key={item.id}
                to={`/sozlamalar/umumiy/${item.path}`}
                active={active}
              >
                <Icon className="sub-icon" /> {item.title}
              </Link>
            );
          })}
        </Sidebar>
        <Body>
          <Outlet />
        </Body>
      </Wrapper>
    </Container>
  );
};

export default UmumiySidebar;
