/* eslint-disable react/prop-types */
import { Container, Count } from "./style";

const Subtitle = (props) => {
  return (
    <Container {...props}>
      {props?.children} {props.count && <Count>{props.count}</Count>}
    </Container>
  );
};

export default Subtitle;
