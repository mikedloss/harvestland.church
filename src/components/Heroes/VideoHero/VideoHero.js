import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './VideoHero.styles';
import * as Media from '../../Elements/media';

export const VideoHero = ({ text, videoSrc, imageSrc, imageHeight }) => {
  return (
    <Styles.VideoHeroStyle>
      <Styles.MediaContainer>
        <Media.SmallOnly>
          <Styles.StaticImage src={imageSrc} height={imageHeight} />
        </Media.SmallOnly>
        <Media.NotSmall>
          <Styles.Video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </Styles.Video>
        </Media.NotSmall>
      </Styles.MediaContainer>
      <Styles.TextContainer>
        <Styles.TextOverlay alignItems="center" justifyContent="center">
          <Styles.WelcomeText fontSize={[6, 7]}>
            {text || 'Hero Text'}
          </Styles.WelcomeText>
        </Styles.TextOverlay>
      </Styles.TextContainer>
    </Styles.VideoHeroStyle>
  );
};

VideoHero.propTypes = {
  text: PropTypes.string,
  videoSrc: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
};
