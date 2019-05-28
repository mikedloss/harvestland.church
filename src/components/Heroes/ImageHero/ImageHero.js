import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './ImageHero.styles';

export const ImageHero = ({
  imageSrc,
  imageDesc,
  height,
  textAlign,
  textJustify,
  containerPadding,
  opacity,
  overlay,
  children,
}) => {
  return (
    <Styled.ImageHeroStyle height={height}>
      <Styled.MediaContainer opacity={opacity || '0.6'} overlay={overlay}>
        <Styled.StaticImage as="img" src={imageSrc} alt={imageDesc} />
      </Styled.MediaContainer>
      <Styled.TextContainer>
        <Styled.TextOverlay
          p={containerPadding || '2rem'}
          alignItems={textAlign || 'center'}
          justifyContent={textJustify || 'center'}
        >
          {children || 'Hero Text'}
        </Styled.TextOverlay>
      </Styled.TextContainer>
    </Styled.ImageHeroStyle>
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
