import { Container, Input } from "./style";

const GenericInput = (props) => {
  // eslint-disable-next-line react/prop-types
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
