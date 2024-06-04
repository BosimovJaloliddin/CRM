import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(240, 240, 240, 1);
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  &:hover {
    background-color: #f0f5ff;
  }
`;
const Section = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({ end }) => end && "flex-end"};
  padding: 12px;

  font-size: 14px;
  font-weight: 500;
  color: var(--primaryColor);
`;
Info.Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 24px;
  border-radius: 50%;
`;
Info.SMS = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--primaryColor);

  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { Wrapper, Section, Info };
