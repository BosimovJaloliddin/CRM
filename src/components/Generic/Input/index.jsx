/* eslint-disable react/prop-types */
import { Container, Input } from "./style";

const GenericInput = (props) => {
  const { iconleft, iconRight } = props;
  return (
    <Container {...props}>
      {iconleft && iconleft}
      <Input {...props} />
      {iconRight && iconRight}
    </Container>
  );
};

export default GenericInput;
