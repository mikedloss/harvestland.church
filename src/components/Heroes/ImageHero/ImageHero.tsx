import React from 'react';

import * as Styled from './ImageHero.styles';

export interface ImageHeroProps {
  imageSrc: string;
  imageDesc?: string;
  height?: string | string[];
  textAlign?: string;
  textJustify?: string;
  containerPadding?: string | string[];
  overlay?: any;
  opacity?: string;
}

export const ImageHero: React.FC<ImageHeroProps> = ({
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
