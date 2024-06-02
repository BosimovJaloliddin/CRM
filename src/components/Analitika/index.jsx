import Subtitle from "../Generic/Subtitle";
import Title from "../Generic/Title";
import { Card, Container, Wrapper } from "./style";

const Analitika = () => {
  return (
    <Container>
      <Title mb={16}>Analitika</Title>
      <Wrapper gap={24}>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </Wrapper>
      <Subtitle mt={24} mb={16}>
        Ijtimoiy tarmoqlar
      </Subtitle>
      <Wrapper>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
      </Wrapper>
    </Container>
  );
};

export default Analitika;
