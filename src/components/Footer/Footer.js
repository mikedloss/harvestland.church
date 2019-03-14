import React from 'react';

import PageLinks from './components/PageLinks';

import * as Media from '../Elements/media';
import * as Styles from './Footer.styles';

import FacebookSvg from '../../assets/svg/facebook.svg';
import InstagramSvg from '../../assets/svg/instagram.svg';

// const ContentfulImage = () => (
//   <a
//     href="https://www.contentful.com/"
//     rel="nofollow noopener noreferrer"
//     target="_blank"
//   >
//     <Styles.ContentfulImage
//       src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
//       alt="Powered by Contentful"
//       mt="1rem"
//     />
//   </a>
// );

const ContentfulAttribute = () => (
  <Styles.SmallLine>
    Powered by{' '}
    <a
      href="http://contentful.com"
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      Contentful
    </a>
  </Styles.SmallLine>
);

export const Footer = () => {
  return (
    <Styles.FooterStyle
      as="footer"
      alignItems="center"
      p="1rem"
      bg="offWhite"
      color="black"
    >
      <Styles.LeftContainer width="50%">
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
          <Styles.SmallLine mt="4px">
            <a
              href="https://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookSvg
                style={{ maxWidth: '20px', marginRight: '0.25rem' }}
              />
            </a>
            <a
              href="https://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramSvg style={{ maxWidth: '20px' }} />
            </a>
          </Styles.SmallLine>
        </Styles.Container>
        <Styles.Container flexDirection="column">
          <Styles.SmallLine>
            © {new Date().getFullYear()} Harvestland Church
          </Styles.SmallLine>
        </Styles.Container>
        <ContentfulAttribute />
        {/* <Media.SmallOnly>
          <ContentfulAttribute />
        </Media.SmallOnly> */}
      </Styles.LeftContainer>
      <Styles.RightContainer
        width="50%"
        flexDirection="row"
        justifyContent="flex-end"
      >
        <Media.NotSmall>
          <PageLinks />
          {/* <ContentfulImage /> */}
        </Media.NotSmall>
      </Styles.RightContainer>
    </Styles.FooterStyle>
  );
};
