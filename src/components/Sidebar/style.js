import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  height: 100vh;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  border: 2px solid red;
`;
const Body = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  margin: 16px;
  background-color: white;
  border: 2px solid blue;
`;

export { Container, Side, Body, Wrapper };
