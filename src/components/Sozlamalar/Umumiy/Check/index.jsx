import { useState } from "react";
import Subtitle from "../../../Generic/Subtitle";
import { Container, FileUpload, ImgBox } from "./style";
import GenericInput from "../../../Generic/Input";
import GenericSelect from "../../../Generic/Select";
import GenericButton from "../../../Generic/Button";

const Check = () => {
  const [url, setUrl] = useState({});

  function getUrl(e) {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setUrl(url);
  }

  return (
    <Container>
      <Subtitle color="#929FAF" mb={8}>
        Logo
      </Subtitle>
      <ImgBox url={url}>
        <FileUpload onChange={getUrl} type="file" />
      </ImgBox>

      <Subtitle color="#929FAF" mb={8} mt={24}>
        Sarlavha
      </Subtitle>
      <GenericInput placeholder="Header" width={500} />

      <Subtitle color="#929FAF" mb={8} mt={24}>
        Chak tag yozuvi
      </Subtitle>
      <GenericInput placeholder="Footer" width={500} />

      <Subtitle color="#929FAF" mb={8} mt={24}>
        Chek tili
      </Subtitle>
      <GenericSelect width={500} />

      <GenericButton type="primary" width={88} ml="true" mt={32}>
        Saqlash
      </GenericButton>
    </Container>
  );
};

export default Check;
