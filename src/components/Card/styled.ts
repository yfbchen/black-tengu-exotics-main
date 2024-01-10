import styled from "styled-components";

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 75px;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.5s ease;

  color: white;
  font-size: 1.5rem;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
  justify-content: center;
  position: relative;

  max-height: 400px;
  max-width: 400px;
  min-height: 350px;
  min-width: 350px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    border-radius: 8px;
    transform: scale(1);
    -webkit-transform: scale(1);

    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
  }

  &:hover {
    img {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }

    ${Overlay} {
      /* transform: scale(0);
      -webkit-transform: scale(0); */
      opacity: 0;
    }
  }
`;

export const Styled = {
  Container,
  ImgContainer,
  Overlay,
};
