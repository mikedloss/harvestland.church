import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Heading } from 'rebass';

import NavItem from './components/NavItem';
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
                  bg="white"
                  color="black"
                  py="5px"
                  px="10px"
                  my="15px"
                  mx="10px"
                  fontSize={0}
                  onClick={this.toggleMenu}
                  menuOpen={this.state.menuOpen}
                >
                  {this.state.menuOpen ? 'Close' : 'Menu'}
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
                  <Heading>words</Heading>
                  {/* <Styles.LogoImage
                    src={data.file.childImageSharp.fluid.src}
                    alt="Harvestland Church"
                  /> */}
                </Styles.Logo>
              </Heading>
              <Styles.NavList isVisible={this.state.menuOpen}>
                <NavItem>Abc</NavItem>
                <NavItem>123</NavItem>
                <NavItem>Def</NavItem>
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
