import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';

import ImageHero from '../ImageHero';

import * as Styled from './Side2SideHero.styles';

export const Side2SideHero = ({
  heroText,
  height,
  textBlockJustify,
  inverse,
  children,
  ...imageHeroProps
}) => {
  imageHeroProps = { ...imageHeroProps, height };
  return (
    <Styled.Side2SideHeroStyle as="section" inverse={inverse}>
      <Styled.HeroContainer height={height}>
        <ImageHero {...imageHeroProps}>
          <Heading p="20px" fontSize={[5, 6]}>
            {heroText}
          </Heading>
        </ImageHero>
      </Styled.HeroContainer>
      <Styled.TextBlockContainer
        py="1rem"
        px="2rem"
        flexDirection="column"
        alignItems="center"
        justifyContent={textBlockJustify || 'flex-start'}
      >
        {children}
      </Styled.TextBlockContainer>
    </Styled.Side2SideHeroStyle>
  );
};

Side2SideHero.propTypes = {
  heroText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  textBlockJustify: PropTypes.string,
  inverse: PropTypes.bool,
  opacity: PropTypes.string,
  children: PropTypes.node,
};
