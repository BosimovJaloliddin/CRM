import { Outlet, useLocation } from "react-router-dom";
import { umumiy } from "../../../../utils/sozlamalar";
import { Body, Container, Link, Sidebar, Wrapper } from "./style";

const UmumiySidebar = () => {
  const location = useLocation();
  return (
    <Container>
      <Wrapper>
        <Sidebar>
          {umumiy?.map((item) => {
            const { icon: Icon } = item;
            const active = location.pathname.includes(item.path);
            return (
              <Link
                key={item.id}
                to={{ pathname: `/sozlamalar/umumiy/${item.path}` }}
                state={{ parent: ["Sozlamalar", "Umumiy"], child: item.path }}
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
