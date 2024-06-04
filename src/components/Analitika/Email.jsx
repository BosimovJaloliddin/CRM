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
                <Subtitle fs={14}>{value.name}</Subtitle>
                <Subtitle fs={14} color={"var(--secondaryColor)"}>
                  {value.status}
                </Subtitle>
              </div>
            </Section>
            <Info.SMS>{value.sms}</Info.SMS>
            <Section end="true">{value.date}</Section>
          </Info>
        );
      })}
    </Wrapper>
  );
};

export default Email;
