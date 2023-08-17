import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { snakes } from "@mocks/snakes";

import { Styled } from "@pages/shop/styled";

const Shop = () => {
  return (
    <div>
      <Styled.SlideContainer>
        <Slide autoplay={false} duration={200}>
          {snakes.map((snake) => {
            return (
              <div key={snake.id}>
                <Image
                  src={snake.image}
                  alt={`image for ${snake.name}`}
                  width={500}
                  height={400}
                  placeholder="blur"
                  blurDataURL={snake.image}
                />
              </div>
            );
          })}
        </Slide>
      </Styled.SlideContainer>

      {snakes.map((snake) => {
        return (
          <Styled.Container key={snake.id}>
            <Image
              src={snake.image}
              alt={`image for ${snake.name}`}
              fill={true}
            />
          </Styled.Container>
        );
      })}
    </div>
  );
};

Shop.displayName = "Shop";

export default Shop;
