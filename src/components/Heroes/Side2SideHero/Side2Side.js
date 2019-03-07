import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';

import ImageHero from '../ImageHero';

import * as Styles from './Side2SideHero.styles';

export const Side2SideHero = ({
  heroText,
  imageSrc,
  height,
  textBlockJustify,
  children,
}) => {
  console.log(height);
  return (
    <Styles.Side2SideHeroStyle as="section">
      <Styles.HeroContainer height={height}>
        <ImageHero imageSrc={imageSrc} height={height}>
          <Heading p="20px" fontSize={[5, 6]}>
            {heroText}
          </Heading>
        </ImageHero>
      </Styles.HeroContainer>
      <Styles.TextBlockContainer
        p="24px"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Styles.TextBlockContainer>
    </Styles.Side2SideHeroStyle>
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
  children: PropTypes.node,
};
