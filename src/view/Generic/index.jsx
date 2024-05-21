import { useLocation } from "react-router-dom";
import { Container } from "./style";

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname} page</h1>
      <h1>Cooming soon....</h1>
    </Container>
  );
};
