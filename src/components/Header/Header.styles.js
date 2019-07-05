import styled from 'styled-components';
import { Link } from 'gatsby';
import { Image, Box, Button, Heading } from 'rebass';
import { breakpointValues as bp } from '../theme';

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

export const MenuButton = styled(Button)`
  position: absolute;
  top: 2px;
  right: 0px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;

  ${(props) =>
    props.menuOpen &&
    `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
  `};
`;
MenuButton.defaultProps = {
  bg: 'white',
  color: 'black',
  py: '5px',
  px: '10px',
  my: '15px',
  mx: '10px',
  fontSize: 0,
};

export const NavHeading = styled(Heading)`
  display: inline-block;
`;
NavHeading.defaultProps = {
  py: 4,
  pl: 4,
  fontSize: '2',
};

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

export const LogoImage = styled(Image)`
  color: ${(props) => props.theme.colors.primary};
  width: 210px;
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
  z-index: 2;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};

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
  color: ${(props) => props.theme.colors.black};
  transition: color 0.3s ease-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
