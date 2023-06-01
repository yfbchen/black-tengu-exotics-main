import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Styled } from "@pages/shop/styled";


const Shop = () => {
    const mockResponse = [
        {
            id: 1,
            name: 'Metal',
            image: '/images/Metal/1_Metal_card.jpg',
        },
    ];

    return (
        <div>
            {/* <Styled.SlideContainer>
                <Slide autoplay={false} duration={200}>
                    {mockResponse.map((snake) => {
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
            </Styled.SlideContainer> */}
            {mockResponse.map(snake => {
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

Shop.displayName = 'Shop';

export default Shop;

