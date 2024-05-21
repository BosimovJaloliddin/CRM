import { useLocation } from "react-router-dom";
import { Container } from "./style";

const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname}</h1>
      <h1>Cooming soon....</h1>
    </Container>
  );
};

export default Generics;
