import styled from "styled-components";


const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 125px;
  padding: 1.5rem;
  width: 50%;
  margin: auto;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

export const Styled = {
  Container,
  MenuContainer,
};