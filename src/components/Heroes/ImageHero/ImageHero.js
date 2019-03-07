import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './ImageHero.styles';

export const ImageHero = ({ imageSrc, height, children }) => {
  return (
    <Styles.ImageHeroStyle height={height}>
      <Styles.MediaContainer>
        <Styles.StaticImage src={imageSrc} />
      </Styles.MediaContainer>
      <Styles.TextContainer>
        <Styles.TextOverlay alignItems="center" justifyContent="center">
          {children || 'Hero Text'}
        </Styles.TextOverlay>
      </Styles.TextContainer>
    </Styles.ImageHeroStyle>
  );
};

ImageHero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.node,
};
