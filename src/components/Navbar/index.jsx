import { Container, Input, InputWrapper, SearchIcon } from "./style";

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder="Search" />
      </InputWrapper>
    </Container>
  );
};

export default Navbar;
