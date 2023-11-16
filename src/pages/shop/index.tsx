import Card from "@components/Card";

import { snakes } from "@mocks/snakes";

import { Styled } from "@pages/shop/styled";

const Shop = () => {
  return (
    <Styled.Container>
      {snakes.map((snake) => {
        return (
          <Card
            key={snake.id}
            description="test description"
            imageName={snake.name}
            imageUrl={snake.image}
            title={snake.name}
          />
        );
      })}
    </Styled.Container>
  );
};

Shop.displayName = "Shop";

export default Shop;
