import React from 'react';

import PageLinks from './components/PageLinks';

import * as Media from '../Elements/media';
import * as Styled from './Footer.styles';

import FacebookSvg from '../../assets/svg/facebook.svg';
import InstagramSvg from '../../assets/svg/instagram.svg';

// const ContentfulImage = () => (
//   <a
//     href="https://www.contentful.com/"
//     rel="nofollow noopener noreferrer"
//     target="_blank"
//   >
//     <Styled.ContentfulImage
//       src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
//       alt="Powered by Contentful"
//       mt="1rem"
//     />
//   </a>
// );

const ContentfulAttribute = () => (
  <Styled.SmallLine>
    Powered by{' '}
    <a
      href="https://contentful.com"
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      Contentful
    </a>
  </Styled.SmallLine>
);

export const Footer = () => {
  return (
    <Styled.FooterStyle
      as="footer"
      flexDirection={['column-reverse', 'row']}
      alignItems={[null, 'center']}
      justifyContent={['flex-start', null]}
    >
      <Styled.LeftContainer width="75%">
        <Styled.Container flexDirection="column">
          <Styled.SmallLine>Harvestland Church</Styled.SmallLine>
          <Styled.SmallLine>5858 Clintonville Road</Styled.SmallLine>
          <Styled.SmallLine>Clarkston, MI 48348</Styled.SmallLine>
        </Styled.Container>
        <Styled.Container flexDirection="column">
          <Styled.SmallLine>
            phone:{' '}
            <Styled.LinkText href="tel:+12483912063">
              248-391-2063
            </Styled.LinkText>
          </Styled.SmallLine>
          <Styled.SmallLine>
            email:{' '}
            <Styled.LinkText href="mailto:info@harvestland.church">
              info@harvestland.church
            </Styled.LinkText>
          </Styled.SmallLine>
          <Styled.SmallLine mt="4px">
            <a
              href="https://www.facebook.com/HarvestlandOpenBible/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookSvg
                style={{ maxWidth: '20px', marginRight: '0.25rem' }}
              />
            </a>
            <a
              href="https://www.instagram.com/harvestlandchurch/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramSvg style={{ maxWidth: '20px' }} />
            </a>
          </Styled.SmallLine>
        </Styled.Container>
        <Styled.Container flexDirection="column">
          <Styled.SmallLine>
            © {new Date().getFullYear()} Harvestland Church
          </Styled.SmallLine>
        </Styled.Container>
        <ContentfulAttribute />
      </Styled.LeftContainer>
      <Styled.RightContainer
        width="25%"
        flexDirection="row"
        justifyContent="flex-start"
      >
        <PageLinks />
      </Styled.RightContainer>
    </Styled.FooterStyle>
  );
};
