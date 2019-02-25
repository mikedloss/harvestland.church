import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import * as Styles from './FrontVideoHero.styles';

export const FrontVideoHero = (props) => {
  console.log(props)
  return (
    <StaticQuery 
      query={graphql`
        {
          file(relativePath: {eq: "videos/front.mp4"}) {
            id
            relativePath
           	absolutePath
            publicURL
          }
        }
      `}
      render={data => console.log(data) || (
        <Styles.VideoHeroStyle>
          <Styles.MediaContainer>
            {/* static image goes here */}
            <Styles.Video autoPlay loop muted>
              <source src={data.file.publicURL} type="video/mp4" />
            </Styles.Video>
          </Styles.MediaContainer>
          <Styles.TextContainer>
              <Styles.TextOverlay alignItems="center" justifyContent="center">
                <Styles.WelcomeText>overlay text</Styles.WelcomeText>
              </Styles.TextOverlay>
          </Styles.TextContainer>
        </Styles.VideoHeroStyle>
      )}
    />
  )
}