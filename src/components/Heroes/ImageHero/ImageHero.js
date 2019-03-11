import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './ImageHero.styles';

export const ImageHero = ({
  imageSrc,
  height,
  textAlign,
  textJustify,
  containerPadding,
  opacity,
  overlay,
  children,
}) => {
  return (
    <Styles.ImageHeroStyle height={height}>
      <Styles.MediaContainer opacity={opacity || '0.6'} overlay={overlay}>
        <Styles.StaticImage src={imageSrc} />
      </Styles.MediaContainer>
      <Styles.TextContainer>
        <Styles.TextOverlay
          p={containerPadding || '2rem'}
          alignItems={textAlign || 'center'}
          justifyContent={textJustify || 'center'}
        >
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
  textAlign: PropTypes.string,
  textJustify: PropTypes.string,
  containerPadding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  overlay: PropTypes.object,
  opacity: PropTypes.string, // changes dark overlay opacity, higher number == lighter
  children: PropTypes.node,
};
