import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Heading } from 'rebass';

import NavItem from './components/NavItem';
import * as Media from '../Elements/media';
import * as Styles from './Header.styles';

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
    <Styles.Nav as="nav">
      <Media.SmallOnly>
        <Styles.MenuButton
          bg="white"
          color="black"
          py="5px"
          px="10px"
          my="15px"
          mx="10px"
          fontSize={0}
          onClick={toggleMenu}
          menuOpen={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </Styles.MenuButton>
      </Media.SmallOnly>
      <Heading
        as="h1"
        py="16px"
        pl="16px"
        fontSize={2}
        style={{ display: 'inline-block' }}
      >
        <Styles.Logo to="/">
          {/* <Heading>words</Heading> */}
          <Styles.LogoImage
            src={data.file.childImageSharp.fluid.src}
            alt="Harvestland Church"
          />
        </Styles.Logo>
      </Heading>
      <Styles.NavList isVisible={menuOpen}>
        <NavItem>
          <Styles.NavLink
            to="/about"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              About
            </Heading>
          </Styles.NavLink>
        </NavItem>
        <NavItem>
          <Styles.NavLink
            to="/groups"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Groups
            </Heading>
          </Styles.NavLink>
        </NavItem>
        <NavItem>
          <Styles.NavLink
            to="/sermons"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Sermons
            </Heading>
          </Styles.NavLink>
        </NavItem>
        <NavItem>
          <Styles.NavLink
            to="/events"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Events
            </Heading>
          </Styles.NavLink>
        </NavItem>
        <NavItem>
          <Styles.NavLink
            to="/visit"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Visit
            </Heading>
          </Styles.NavLink>
        </NavItem>
        <NavItem>
          <Styles.NavLink
            to="/give"
            onClick={resetMenu}
            activeStyle={{ color: '#42613d' }}
          >
            <Heading as="h3" fontSize={[4, 3]}>
              Give
            </Heading>
          </Styles.NavLink>
        </NavItem>
      </Styles.NavList>
    </Styles.Nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
