import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const BodyContainer = styled.div`
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  padding-top: 3rem;
  width: 75%;
`;

export const Styled = {
  MainContainer,
  BodyContainer,
};
