import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../global.css';
import theme from '../theme';
import Header from '../Header';
import Footer from '../Footer';

import * as Styled from './Layout.styles';

const Layout = ({ children, fullWidth, hideLogo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Styled.SiteContainer isFullWidth={fullWidth}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} hideLogo={hideLogo} />
        <main>{children}</main>
        <Footer />
      </Styled.SiteContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  fullWidth: PropTypes.bool,
  hideLogo: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  fullWidth: false,
  hideLogo: false,
};

export default Layout;
