import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../global.css';
import theme from '../theme';
import { Header } from '../Header';
import { Footer } from '../Footer';

import * as Styled from './Layout.styles';
import { BannerAlert } from '../BannerAlert/BannerAlert';

export interface LayoutProps {
  fullWidth?: boolean;
  hideLogo?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  fullWidth = false,
  hideLogo = false,
}) => {
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
