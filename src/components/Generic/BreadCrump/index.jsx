import { Arrow, Container } from "./style";
import Title from "../Title";
import Subtitle from "../Subtitle";
import { useLocation } from "react-router-dom";

const BreadCrump = () => {
  const location = useLocation();

  return location.pathname !== "/analitika" ? (
    <Container title={location?.state?.parent}>
      <Title>{location?.state?.parent}</Title>
      {location.state.child ? (
        <>
          <Arrow />
          <Subtitle>{location?.state?.child}</Subtitle>
        </>
      ) : null}
    </Container>
  ) : null;
};

export default BreadCrump;
