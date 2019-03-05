import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './TextHero.styles';

export const TextHero = ({
  useMargin,
  bg,
  color,
  alignItems,
  justifyContent,
  flexDirection,
  children,
}) => {
  return (
    <Styles.TextHeroStyle
      flexDirection={flexDirection || 'column'}
      alignItems={alignItems || 'center'}
      justifyContent={justifyContent || 'center'}
      bg={bg || 'white'}
      color={color || 'primary'}
      m={useMargin && ['6rem', '8rem']}
      p={!useMargin && ['6rem', '8rem']}
    >
      <Styles.HeroText fontSize={6}>{children || 'Text Hero'}</Styles.HeroText>
    </Styles.TextHeroStyle>
  );
};

TextHero.propTypes = {
  useMargin: PropTypes.bool,
  bg: PropTypes.string,
  color: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
};
