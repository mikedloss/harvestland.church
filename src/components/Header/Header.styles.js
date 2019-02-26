import styled from 'styled-components';
import { Image, Text, Box, Button } from 'rebass';
import { Link } from 'gatsby';
import { breakpoints as bp } from '../Elements/theme';

export const Logo = styled(Link)`
  text-decoration: none;
  color: #222;
`;

export const LogoImage = styled(Image)`
  color: #42613d;
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
  ${(props) => {
    console.log(props);
    return (
      props.menuOpen &&
      `
      background-color: #42613d;
      color: #fff;
    `
    );
  }}
`;

// main-nav
export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  position: absolute;
  width: 100%;
  background-color: #fff;
  top: 60px;
  z-index: ${({ isVisible }) => (isVisible ? '2' : '-1')};
  border-bottom: 2px solid #42613d;

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
