import { FunctionComponent } from "react";

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
  isselected,
}) => {
  return (
    <Styled.MenuLink
      onClick={onLinkClick ? () => onLinkClick(url) : noop}
      isselected={isselected}
      href={url}
    >
      <Icon style={{ width: "20px", height: "20px", marginRight: "0.5rem" }} />
      {text}
    </Styled.MenuLink>
  );
};

NavigationLink.defaultProps = {
  isselected: "false",
  onLinkClick: noop,
};

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
