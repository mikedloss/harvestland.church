import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './ImageHero.styles';

export const ImageHero = ({ text, imageSrc, height }) => {
  return (
    <Styles.ImageHeroStyle>
      <Styles.MediaContainer>
        <Styles.StaticImage src={imageSrc} height={height} />
      </Styles.MediaContainer>
      <Styles.TextContainer>
        <Styles.TextOverlay alignItems="center" justifyContent="center">
          <Styles.WelcomeText fontSize={[5, 6]}>
            {text || 'Hero Text'}
          </Styles.WelcomeText>
        </Styles.TextOverlay>
      </Styles.TextContainer>
    </Styles.ImageHeroStyle>
  );
};

ImageHero.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  height: PropTypes.string,
};
