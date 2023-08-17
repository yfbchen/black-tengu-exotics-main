import { useState } from "react";
import { useRouter } from "next/router";

import { Styled } from "@components/Navigation/styled";
import NavigationLink from "@components/NavigationLink";

import CartSvg from "@constants/icons/cart.svg";
import HomeSvg from "@constants/icons/home.svg";
import ShopSvg from "@constants/icons/shop.svg";
import { ROUTES } from "@constants/routes";

const Navigation = () => {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState<string>(router.pathname);

  const onLinkClick = (url: string) => {
    setSelectedLink(url);
  };

  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <NavigationLink
          Icon={HomeSvg}
          onLinkClick={onLinkClick}
          text={"Home"}
          url={`${ROUTES.home}`}
          isselected={`${selectedLink === ROUTES.home}`}
        />
        <NavigationLink
          Icon={ShopSvg}
          onLinkClick={onLinkClick}
          text={"Shop"}
          url={`${ROUTES.shop}`}
          isselected={`${selectedLink === ROUTES.shop}`}
        />
        <NavigationLink
          Icon={CartSvg}
          onLinkClick={onLinkClick}
          text={"Cart"}
          url={`${ROUTES.cart}`}
          isselected={`${selectedLink === ROUTES.cart}`}
        />
      </Styled.MenuContainer>
    </Styled.Container>
  );
};

Navigation.displayName = "Navigation";

export default Navigation;
