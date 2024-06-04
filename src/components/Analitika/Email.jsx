import { email } from "../../mock/email";
import Subtitle from "../Generic/Subtitle";
import { Info, Section, Wrapper } from "./emailStyle";

const Email = () => {
  return (
    <Wrapper>
      {email.map((value) => {
        return (
          <Info key={value.id}>
            <Section>
              <Info.Img src={value.src} />
              <div>
                <Subtitle>{value.name}</Subtitle>
                <Subtitle color={"var(--secondaryColor)"}>
                  {value.status}
                </Subtitle>
              </div>
            </Section>
            <Section>{value.sms}</Section>
            <Section end>{value.date}</Section>
          </Info>
        );
      })}
    </Wrapper>
  );
};

export default Email;
