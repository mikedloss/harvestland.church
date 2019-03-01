import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';

import ImageHero from '../ImageHero';

import * as Styles from './Side2SideHero.styles';

export const Side2SideHero = ({
  heroText,
  imageSrc,
  height,
  textBlockJustify,
  children,
}) => {
  return (
    <Styles.Side2SideHeroStyle as="section">
      <Styles.HeroContainer>
        <ImageHero text={heroText} imageSrc={imageSrc} height={height} />
      </Styles.HeroContainer>
      <Styles.TextBlockContainer p="24px" alignItems="center">
        {children}
      </Styles.TextBlockContainer>
    </Styles.Side2SideHeroStyle>
  );
};

Side2SideHero.propTypes = {
  heroText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  height: PropTypes.string,
  textBlockJustify: PropTypes.string,
  children: PropTypes.node,
};
