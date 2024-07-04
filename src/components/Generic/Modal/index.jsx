/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { Container, Wrapper } from "./style";
import GenericButton from "../Button";

const Modal = (props) => {
  return props?.open
    ? createPortal(
        <Container>
          <Wrapper>
            Modal
            <GenericButton onClick={() => props?.onClose(false)} type="delete">
              O&apos;chirish
            </GenericButton>
          </Wrapper>
        </Container>,
        document.getElementById("modal")
      )
    : null;
};

export default Modal;
