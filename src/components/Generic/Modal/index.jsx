/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { Container, Footer, Wrapper } from "./style";
import GenericButton from "../Button";
import Title from "../Title";

const Modal = (props) => {
  return props?.open
    ? createPortal(
        <Container>
          <Wrapper>
            <Title>Lid qo&apos;shish</Title>
            {props?.children}
            <Footer>
              {props?.onClose && (
                <GenericButton onClick={props?.onClose} type="delete">
                  O&apos;chirish
                </GenericButton>
              )}
              {props?.onSave && (
                <GenericButton onClick={props?.onSave} type="primary">
                  Saqlash
                </GenericButton>
              )}
            </Footer>
          </Wrapper>
        </Container>,
        document.getElementById("modal")
      )
    : null;
};

export default Modal;
