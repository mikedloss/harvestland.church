import styled from 'styled-components';
import { Image, Text, Box, Button } from 'rebass';
import { Link } from 'gatsby';
import { breakpoints as bp } from '../Elements/theme';

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

export const LogoImage = styled(Image)`
  color: ${(props) => props.theme.colors.primary};
`;

export const Nav = styled(Box)`
  min-height: 64px;
  @media screen and (min-width: ${bp.SMALL}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MenuButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  ${(props) =>
    props.menuOpen &&
    `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
  `}
`;

// main-nav
export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  display: ${({ isVisible }) => (isVisible ? '' : 'none')};

  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  top: 60px;
  z-index: ${({ isVisible }) => (isVisible ? '2' : '0')};
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};

  @media screen and (min-width: ${bp.SMALL}) {
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
  color: ${(props) => props.theme.colors.black};
  transition: color 0.3s ease-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
