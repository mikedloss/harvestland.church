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
                <BannerAlert>
                    <BannerAlert.ExternalLink
                        href="https://www.facebook.com/HarvestlandOpenBible/live_videos/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <BannerAlert.Text>
                            Online Services on Facebook - Click Here
                        </BannerAlert.Text>
                    </BannerAlert.ExternalLink>
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
    children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
    fullWidth: false,
    hideLogo: false,
};
