import Link from 'next/link';
import styled from "styled-components";

import { COLORS } from '@constants/colors';


export interface MenuLinkProps {
    isSelected: boolean;
}

const MenuLink = styled.div<MenuLinkProps>`
  align-items: center;
  border-radius: 20px;
  color: ${COLORS.menuText};
  display: flex;
  justify-content: center;
  margin: 0 10px;
  padding: 1em;
  text-decoration: none;
  width: 100px;

  background-color: ${props => props.isSelected ? `${COLORS.menuBackground}` : 'none'};

  &:hover {
    background-color: ${COLORS.menuBackground};
    cursor: pointer;
  }
`;

export const Styled = {
    MenuLink,
}