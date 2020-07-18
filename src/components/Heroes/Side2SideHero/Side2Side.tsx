import React from 'react';
import { Heading } from 'rebass';

import { ImageHero, ImageHeroProps } from '../ImageHero';

import * as Styled from './Side2SideHero.styles';

export interface Side2SideHeroProps extends ImageHeroProps {
  heroText?: string;
  imageWidth?: string;
  textBlockJustify?: string;
  inverse?: boolean;
}

export const Side2SideHero: React.FC<Side2SideHeroProps> = ({
  heroText,
  imageWidth,
  textBlockJustify,
  inverse,
  children,
  ...imageHeroProps
}) => {
  const { height } = imageHeroProps;

  return (
    <Styled.Side2SideHeroStyle as="section" inverse={inverse}>
      <Styled.HeroContainer height={height as any} imageWidth={imageWidth}>
        <ImageHero {...imageHeroProps}>
          {/* TODO: only pass in a component here, don't force a style on content */}
          <Heading p="20px" fontSize={[5, 6]}>
            {heroText}
          </Heading>
        </ImageHero>
      </Styled.HeroContainer>
      <Styled.TextBlockContainer
        py="1rem"
        px="2rem"
        imageWidth={imageWidth}
        flexDirection="column"
        alignItems="center"
        justifyContent={textBlockJustify || 'flex-start'}
      >
        {children}
      </Styled.TextBlockContainer>
    </Styled.Side2SideHeroStyle>
  );
};
