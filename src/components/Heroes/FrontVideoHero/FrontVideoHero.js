import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Image } from 'rebass';

import FrontHero from '../FrontHero';
import * as Styles from './FrontVideoHero.styles';
import * as Media from '../../Elements/media';

export const FrontVideoHero = (props) => {
  console.log(props);
  return (
    <StaticQuery
      query={graphql`
        {
          video: file(relativePath: { eq: "videos/front.mp4" }) {
            publicURL
          }
          staticImage: file(relativePath: { eq: "images/tall.png" }) {
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
          <Styles.VideoHeroStyle>
            <Styles.MediaContainer>
              {/* static image goes here */}
              <Media.SmallOnly>
                <Styles.StaticImage img={data} />
              </Media.SmallOnly>
              <Media.NotSmall>
                <Styles.Video autoPlay loop muted>
                  <source src={data.video.publicURL} type="video/mp4" />
                </Styles.Video>
              </Media.NotSmall>
            </Styles.MediaContainer>
            <Styles.TextContainer>
              <Styles.TextOverlay alignItems="center" justifyContent="center">
                <Styles.WelcomeText fontSize={[5, 6]}>
                  overlay text
                </Styles.WelcomeText>
              </Styles.TextOverlay>
            </Styles.TextContainer>
          </Styles.VideoHeroStyle>
        )
      }
    />
  );
};
