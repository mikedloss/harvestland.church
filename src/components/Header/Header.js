import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Heading } from 'rebass';

import NavItem from './components/NavItem';
import { NavDropdown } from './components/NavDropdown';
import { useClickAway } from '../../hooks/useClickAway';

import * as Media from '../Elements/media';
import * as Styled from './Header.styles';
import { links } from './links';

const buildLinks = (links, linkOnClick) => {
  const allLinks = links.map((link) => {
    if (link.dropdown) {
      return (
        <NavDropdown label={link.label} key={`header-${link.label}-dropdown`}>
          {buildLinks(link.dropdownContent, linkOnClick)}
        </NavDropdown>
      );
    } else {
      return (
        <NavItem key={`header-${link.label}`}>
          <Styled.NavLink
            to={link.route}
            onClick={linkOnClick}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              {link.label}
            </Heading>
          </Styled.NavLink>
        </NavItem>
      );
    }
  });

  return allLinks;
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const resetMenu = () => setMenuOpen(false);

  useClickAway(navRef, () => menuOpen && resetMenu());

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/logo-green.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const allLinks = buildLinks(links, resetMenu);

  return (
    <Styled.Nav ref={navRef} as="nav">
      <Media.SmallOnly>
        <Styled.MenuButton onClick={toggleMenu} menuOpen={menuOpen}>
          {menuOpen ? 'Close' : 'Menu'}
        </Styled.MenuButton>
      </Media.SmallOnly>
      <Styled.NavHeading>
        <Styled.Logo to="/">
          <Styled.LogoImage
            src={data.file.childImageSharp.fluid.src}
            alt="Harvestland Church"
          />
        </Styled.Logo>
      </Styled.NavHeading>
      <Styled.NavList isVisible={menuOpen}>{allLinks}</Styled.NavList>
    </Styled.Nav>
  );
};
