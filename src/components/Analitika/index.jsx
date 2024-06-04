import { media, privateData } from "../../utils/analitics";
import Subtitle from "../Generic/Subtitle";
import Title from "../Generic/Title";
import Email from "./Email";
import Moliya from "./Moliya";
import {
  Arrow,
  Card,
  Container,
  Count,
  FooterWrapper,
  Plus,
  Section,
  SectionWrap,
  SubCard,
  Wrapper,
} from "./style";

const Analitika = () => {
  return (
    <Container>
      <Title mb={16}>Analitika</Title>
      {/* Private Data */}
      <Wrapper gap={24}>
        {privateData.map((value) => {
          const { icon: Icon, img: Img } = value;
          return (
            <Card key={value.id} gap={24} title={value.title}>
              {/* TOP */}
              <Section>
                <SectionWrap title={value.title}>
                  <Icon className="icon" />
                  <Title>{value.title}</Title>
                </SectionWrap>
                <Plus title={value.title} />
              </Section>
              {/* BOTTOM */}
              <Section>
                <SectionWrap>
                  <Arrow />
                  <Count>{value.count}</Count>
                </SectionWrap>
                <Img />
              </Section>
            </Card>
          );
        })}
      </Wrapper>
      <Subtitle mt={24} mb={16}>
        Ijtimoiy tarmoqlar
      </Subtitle>
      {/* MEDIA */}
      <Wrapper>
        {media.map((value) => {
          const { icon: Icon } = value;
          return (
            <SubCard key={value.id} gap={24}>
              {/* TOP */}
              <Section>
                <SectionWrap>
                  <Icon className={"subicon"} />
                  <Subtitle>{value.title}</Subtitle>
                </SectionWrap>
                {/* <Plus title={value.title} /> */}
              </Section>
              {/* BOTTOM */}
              <Section>
                <SectionWrap>
                  <Arrow />
                  <Title color={"#52c41a"}>22%</Title>
                </SectionWrap>
                <Count>{value.count}K</Count>
              </Section>
            </SubCard>
          );
        })}
      </Wrapper>

      <FooterWrapper>
        {/* EMAIL */}
        <FooterWrapper.Email>
          <Subtitle mt={24} mb={16} count={12}>
            Email
          </Subtitle>
          <Email />
        </FooterWrapper.Email>
        {/* Moliya */}
        <FooterWrapper.Moliya>
          <Subtitle mt={24} mb={16} count={12}>
            Moliya
          </Subtitle>
          <Moliya />
        </FooterWrapper.Moliya>
      </FooterWrapper>
    </Container>
  );
};

export default Analitika;
