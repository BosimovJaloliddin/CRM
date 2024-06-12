import GenericInput from "../Generic/Input";
import GenericSelect from "../Generic/Select";
import DateTimePicers from "./DateTimePicers";
import Time from "./Time";
import { Container, SearchIcon, Section } from "./style";

const Navbar = () => {
  const data = [
    {
      id: 1,
      value: "uzb",
      title: "Uzb",
    },
    {
      id: 2,
      value: "rus",
      title: "Rus",
    },
    {
      id: 3,
      value: "eng",
      title: "Eng",
    },
  ];
  return (
    <Container>
      <GenericInput
        borderradius={8}
        fontSize={14}
        fontWeight={500}
        lineheight={20}
        width={500}
        height={40}
        iconleft={<SearchIcon />}
        placeholder="Search"
      />
      <Section>
        <Time />
        <DateTimePicers />
        <GenericSelect data={data} />
      </Section>
    </Container>
  );
};

export default Navbar;
