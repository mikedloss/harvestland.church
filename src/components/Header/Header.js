import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Heading } from 'rebass';

import NavItem from './components/NavItem';
import * as Media from '../Elements/media';
import * as Styled from './Header.styles';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const resetMenu = () => setMenuOpen(false);

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

  return (
    <Styled.Nav as="nav">
      <Media.SmallOnly>
        <Styled.MenuButton onClick={toggleMenu} menuOpen={menuOpen}>
          {menuOpen ? 'Close' : 'Menu'}
        </Styled.MenuButton>
      </Media.SmallOnly>
      <Styled.NavHeading as="h1">
        <Styled.Logo to="/">
          {/* <Heading>words</Heading> */}
          <Styled.LogoImage
            src={data.file.childImageSharp.fluid.src}
            alt="Harvestland Church"
          />
        </Styled.Logo>
      </Styled.NavHeading>
      <Styled.NavList isVisible={menuOpen}>
        <NavItem>
          <Styled.NavLink
            to="/about"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              About
            </Heading>
          </Styled.NavLink>
        </NavItem>
        <NavItem>
          <Styled.NavLink
            to="/groups"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Groups
            </Heading>
          </Styled.NavLink>
        </NavItem>
        <NavItem>
          <Styled.NavLink
            to="/sermons"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Sermons
            </Heading>
          </Styled.NavLink>
        </NavItem>
        <NavItem>
          <Styled.NavLink
            to="/events"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Events
            </Heading>
          </Styled.NavLink>
        </NavItem>
        <NavItem>
          <Styled.NavLink
            to="/visit"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Visit
            </Heading>
          </Styled.NavLink>
        </NavItem>
        <NavItem>
          <Styled.NavLink
            to="/give"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Give
            </Heading>
          </Styled.NavLink>
        </NavItem>
      </Styled.NavList>
    </Styled.Nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
