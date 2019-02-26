import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Heading, Box, Text, Flex } from 'rebass';

import * as Media from '../Elements/media';
import * as Styles from './Header.styles';

class Header extends React.Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            file(relativePath: { eq: "images/logo-green.png" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) =>
          console.log(data) || (
            <Styles.Nav as="nav">
              <Media.SmallOnly>
                <Styles.MenuButton
                  as="span"
                  p="20px"
                  pt="20px"
                  fontSize={0}
                  onClick={this.toggleMenu}
                >
                  Menu
                </Styles.MenuButton>
              </Media.SmallOnly>
              <Heading
                as="h1"
                py="16px"
                pl="16px"
                fontSize={2}
                style={{ display: 'inline-block' }}
              >
                <Link to="/">
                  <Styles.LogoImage
                    fluid={data.file.childImageSharp.fluid}
                    alt="Harvestland Church"
                  />
                </Link>
              </Heading>
              <Styles.NavList isVisible={this.state.menuOpen}>
                <Styles.NavItem as="li">
                  <Styles.NavContent as="p" fontSize={3} fontWeight="bold">
                    Abc
                  </Styles.NavContent>
                </Styles.NavItem>
                <Styles.NavItem as="li">
                  <Styles.NavContent as="p" fontSize={3} fontWeight="bold">
                    123
                  </Styles.NavContent>
                </Styles.NavItem>
                <Styles.NavItem as="li">
                  <Styles.NavContent as="p" fontSize={3} fontWeight="bold">
                    Def
                  </Styles.NavContent>
                </Styles.NavItem>
              </Styles.NavList>
            </Styles.Nav>
          )
        }
      />
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

{
  /* 
<Box>
            <Flex justifyContent="space-between" bg="white" py="16px" pl="16px" my="0" mx="auto">
              <Heading m="0" as="h1" fontSize={2}>
                <Link to="/" style={{ color: '#222', textDecoration: 'none' }}>
                  <Styles.LogoImage src={`${data.file.childImageSharp.fluid.src}`} alt="Harvestland Church" />
                </Link>
              </Heading>
              <Media.SmallOnly>
                <Styles.MenuButton as="span" p="16px" fontSize={0} onClick={this.toggleMenu}>Menu</Styles.MenuButton>
              </Media.SmallOnly>
              <Media.NotSmall>
                <Styles.NavList isVisible={this.state.menuOpen}>
                  <Styles.NavItem as="li">
                    <Styles.NavContent as="p" mr="16px" fontSize={3} fontWeight="bold">Abc</Styles.NavContent>
                  </Styles.NavItem>
                  <Styles.NavItem as="li">
                    <Styles.NavContent as="p" mr="16px" fontSize={3} fontWeight="bold">123</Styles.NavContent>
                  </Styles.NavItem>
                  <Styles.NavItem as="li">
                    <Styles.NavContent as="p" mr="16px" fontSize={3} fontWeight="bold">Def</Styles.NavContent>
                  </Styles.NavItem>
                </Styles.NavList>
              </Media.NotSmall>
            </Flex>
            <Media.SmallOnly>
              <Styles.NavList isVisible={this.state.menuOpen}>
                <Styles.NavItem as="li">
                  <Styles.NavContent my="16px" mr="16px" fontSize={3} fontWeight="bold">Abc</Styles.NavContent>
                </Styles.NavItem>
                <Styles.NavItem as="li">
                  <Styles.NavContent my="16px" mr="16px" fontSize={3} fontWeight="bold">123</Styles.NavContent>
                </Styles.NavItem>
                <Styles.NavItem as="li">
                  <Styles.NavContent my="16px" mr="16px" fontSize={3} fontWeight="bold">Def</Styles.NavContent>
                </Styles.NavItem>
              </Styles.NavList>
            </Media.SmallOnly>
          </Box> */
}
