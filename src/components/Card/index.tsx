import { FunctionComponent } from "react";
import Image from "next/image";

import { Styled } from "@components/Card/styled";

export interface CardProps {
  description: string;
  height?: number;
  imageName: string;
  imageUrl: string;
  title: string;
  width?: number;
}

const Card: FunctionComponent<CardProps> = ({
  description,
  imageName,
  imageUrl,
  title,
}) => {
  return (
    <Styled.Container>
      <Styled.ImgContainer>
        <Image src={imageUrl} alt={`image for ${imageName}`} fill />

        <Styled.Overlay>
          <p>{title}</p>
        </Styled.Overlay>
      </Styled.ImgContainer>
    </Styled.Container>
  );
};

export default Card;
