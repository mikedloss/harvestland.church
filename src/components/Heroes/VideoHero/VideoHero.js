import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './VideoHero.styles';
import * as Media from '../../Elements/media';

export const VideoHero = ({ text, videoSrc, imageSrc, imageHeight }) => {
  return (
    <Styled.VideoHeroStyle>
      <Styled.MediaContainer>
        <Media.SmallOnly>
          <Styled.StaticImage src={imageSrc} height={imageHeight} />
        </Media.SmallOnly>
        <Media.NotSmall>
          <Styled.Video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </Styled.Video>
        </Media.NotSmall>
      </Styled.MediaContainer>
      <Styled.TextContainer>
        <Styled.TextOverlay alignItems="center" justifyContent="center">
          <Styled.WelcomeText fontSize={[6, 7]}>
            {text || 'Hero Text'}
          </Styled.WelcomeText>
        </Styled.TextOverlay>
      </Styled.TextContainer>
    </Styled.VideoHeroStyle>
  );
};

VideoHero.propTypes = {
  text: PropTypes.string,
  videoSrc: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
};
