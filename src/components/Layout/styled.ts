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
  overflow-y: scroll;
  padding-top: 3rem;
  width: 75%;

  // Hide Scrollbar for Chrome, Safari, Opera
  ::-webkit-scrollbar {
    display: none;
  }

  // Hide Scrollbar for IE, Edge, Firefox
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Styled = {
  MainContainer,
  BodyContainer,
};
