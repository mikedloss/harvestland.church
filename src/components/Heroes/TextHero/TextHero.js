import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './TextHero.styles';

export const TextHero = ({
  text,
  useMargin,
  bg,
  color,
  alignItems,
  justifyContent,
  flexDirection,
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
      <Styles.HeroText fontSize={6}>{text || 'Text Hero'}</Styles.HeroText>
    </Styles.TextHeroStyle>
  );
};

TextHero.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
};
