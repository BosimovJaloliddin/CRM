import { Container, Input } from "./style";

const GenericInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { iconLeft, iconRight } = props;
  return (
    <Container {...props}>
      {iconLeft && iconLeft}
      <Input {...props} />
      {iconRight && iconRight}
    </Container>
  );
};

export default GenericInput;
