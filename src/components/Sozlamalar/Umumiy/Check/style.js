import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImgBox = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 8px;
  background-color: #f8fafc;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FileUpload = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
`;
