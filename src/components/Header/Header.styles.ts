import styled from 'styled-components';
import { Link } from 'gatsby';
import { Box, Button, Heading } from 'rebass';
import { breakpointValues as bp } from '../theme';

import LogoSVG from '../../assets/svg/logo.svg';

export const Nav = styled(Box)`
  margin: 0 auto;
  max-width: 1600px;
  min-height: 64px;
  z-index: 9;
  @media screen and (min-width: ${bp.SMALL}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export interface MenuButtonProps {
  menuOpen: boolean;
}

export const MenuButton = styled(Button).attrs({
  bg: 'white',
  color: 'black',
  py: '5px',
  px: '10px',
  my: '15px',
  mx: '10px',
  fontSize: 0,
})<MenuButtonProps>`
  position: absolute;
  top: 2px;
  right: 0px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;

  ${({ menuOpen, theme }) =>
    menuOpen &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `};
`;

export const NavHeading = styled(Heading).attrs({
  py: 4,
  pl: 4,
  fontSize: '2',
})`
  display: inline-block;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const LogoImage = styled(LogoSVG)`
  width: 210px;
  height: auto;
  & path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

// main-nav
export interface NavListProps {
  isVisible: boolean;
}

export const NavList = styled.ul<NavListProps>`
  list-style-type: none;
  margin: 0;
  display: ${({ isVisible }) => (isVisible ? '' : 'none')};

  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  top: 60px;
  z-index: 2;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${bp.SMALL}px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    position: relative;
    top: 0;
    width: inherit;
    border: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0.3s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
