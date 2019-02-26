import styled from 'styled-components';
import { Image, Text, Box } from 'rebass';
import Img from 'gatsby-image';
import { breakpoints as bp } from '../Elements/theme';

export const LogoImage = styled(Image)`
  content: 'Harvestland Church';
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

export const MenuButton = styled(Text)`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
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

  @media screen and (min-width: ${bp.SMALL}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    position: relative;
    top: 0;
    width: inherit;
  }
`;

// li
export const NavItem = styled(Text)`
  text-align: center;
  margin: 16px auto;

  @media screen and (min-width: ${bp.SMALL}) {
    margin-right: 16px;
  }
`;

// li content
export const NavContent = styled(Text)`
  text-decoration: none;
`;
