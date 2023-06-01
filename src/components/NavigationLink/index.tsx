import { FunctionComponent } from "react";
import Link from "next/link";

import { MenuLinkProps, Styled } from "@components/NavigationLink/styled";

import noop from "@utils/noop";

interface Props extends MenuLinkProps {
  Icon?: any;
  onLinkClick?: (url: string) => void;
  text: string;
  url: string;
}

const NavigationLink: FunctionComponent<Props> = ({
  Icon,
  onLinkClick,
  text,
  url,
  isSelected,
}) => {
  return (
    <Styled.MenuLink
      isSelected={isSelected}
      onClick={onLinkClick ? () => onLinkClick(url) : noop}
    >
      <Icon style={{ width: "20px", height: "20px", marginRight: "0.5rem" }} />
      <Link href={url}>{text}</Link>
    </Styled.MenuLink>
  );
};

NavigationLink.defaultProps = {
  isSelected: false,
  onLinkClick: noop,
};

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
