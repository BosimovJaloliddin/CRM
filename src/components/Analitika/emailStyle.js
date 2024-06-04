import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(240, 240, 240, 1);
`;

const Info = styled.div`
  display: flex;
  border-radius: 8px;
  &:hover {
    background-color: #f0f5ff;
  }
`;
const Section = styled.div`
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: ${({ end }) => end && "flex-end"};
  flex: 1;
  padding: 12px;

  overflow: hidden;
`;
Info.Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 24px;
  border-radius: 50%;
`;

export { Wrapper, Section, Info };
