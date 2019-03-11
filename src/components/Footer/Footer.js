import React from 'react';

import PageLinks from './components/PageLinks';

import * as Media from '../Elements/media';
import * as Styles from './Footer.styles';

export const Footer = () => {
  return (
    <Styles.FooterStyle
      as="footer"
      alignItems="center"
      p="1rem"
      bg="offWhite"
      color="black"
    >
      <Styles.LeftContainer width={1 / 2}>
        <Styles.Container flexDirection="column">
          <Styles.SmallLine>Harvestland Church</Styles.SmallLine>
          <Styles.SmallLine>5858 Clintonville Road</Styles.SmallLine>
          <Styles.SmallLine>Clarkston, MI 48348</Styles.SmallLine>
        </Styles.Container>
        <Styles.Container flexDirection="column">
          <Styles.SmallLine>
            phone:{' '}
            <Styles.LinkText href="tel:+12483912063">
              248-391-2063
            </Styles.LinkText>
          </Styles.SmallLine>
          <Styles.SmallLine>
            email:{' '}
            <Styles.LinkText href="mailto:info@harvestland.church">
              info@harvestland.church
            </Styles.LinkText>
          </Styles.SmallLine>
        </Styles.Container>
        <Styles.Container flexDirection="column">
          <Styles.SmallLine>
            © {new Date().getFullYear()} Harvestland Church
          </Styles.SmallLine>
        </Styles.Container>
      </Styles.LeftContainer>
      <Styles.RightContainer
        width={1 / 2}
        flexDirection="row"
        justifyContent="flex-end"
      >
        <Media.NotSmall>
          <PageLinks />
        </Media.NotSmall>
      </Styles.RightContainer>
    </Styles.FooterStyle>
  );
};
