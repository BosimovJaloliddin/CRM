import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;
  background: rgba(37, 62, 95, 0.5);
  z-index: 999;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const Wrapper = styled.div`
  max-height: 90vh;
  max-width: 900px;
  min-width: 400px;
  width: fit-content;
  margin: auto;
  padding: 32px 48px;
  background-color: #ffffff;
  border-radius: 8px;
  overflow-y: auto;
  overflow-x: none;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
`;
