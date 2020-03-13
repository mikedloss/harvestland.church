import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../global.css";
import theme from "../theme";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { BannerAlert, BannerAlertPropTypes } from "../BannerAlert";

import * as Styled from "./Layout.styles";

export const Layout = ({
  children,
  fullWidth,
  hideLogo,
  showAlert,
  alertProps
}) => {
  const headerProps = { hideLogo };

  return (
    <ThemeProvider theme={theme}>
      <Styled.SiteContainer isFullWidth={fullWidth}>
        <GlobalStyle />
        <Header {...headerProps} />
        {showAlert && <BannerAlert {...alertProps} />}
        <main>{children}</main>
        <Footer />
      </Styled.SiteContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  fullWidth: PropTypes.bool,
  hideLogo: PropTypes.bool,
  showAlert: PropTypes.bool,
  alertProps: BannerAlertPropTypes,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  fullWidth: false,
  hideLogo: false
};
