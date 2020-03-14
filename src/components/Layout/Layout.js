import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../global.css";
import theme from "../theme";
import { Header } from "../Header";
import { Footer } from "../Footer";

import * as Styled from "./Layout.styles";
import { BannerAlert } from "../BannerAlert/BannerAlert";

export const Layout = ({ children, fullWidth, hideLogo }) => {
  const headerProps = { hideLogo };

  return (
    <ThemeProvider theme={theme}>
      <Styled.SiteContainer isFullWidth={fullWidth}>
        <GlobalStyle />
        <Header {...headerProps} />
        <BannerAlert type="warning">
          <BannerAlert.Link to="/covid19-update">
            <BannerAlert.Text>
              COVID-19 Update at Harvestland Church
            </BannerAlert.Text>
          </BannerAlert.Link>
        </BannerAlert>
        <main>{children}</main>
        <Footer />
      </Styled.SiteContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  fullWidth: PropTypes.bool,
  hideLogo: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  fullWidth: false,
  hideLogo: false
};
