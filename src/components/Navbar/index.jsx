import GenericInput from "../Generic/Input";
import DateTimePicers from "./DateTimePicers";
import GenericSelect from "./Select";
import Time from "./Time";
import { Container, SearchIcon, Section } from "./style";

const Navbar = () => {
  return (
    <Container>
      <GenericInput
        borderRadius={8}
        fontSize={14}
        fontWeight={500}
        lineHeight={20}
        width={500}
        height={40}
        iconLeft={<SearchIcon />}
        placeholder="Search"
      />
      <Section>
        <Time />
        <DateTimePicers />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
