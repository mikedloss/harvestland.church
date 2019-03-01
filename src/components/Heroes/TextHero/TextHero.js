import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './TextHero.styles';

export const TextHero = ({ text, bg, color }) => {
  return (
    <Styles.TextHeroStyle
      alignItems="center"
      justifyContent="center"
      bg={bg || 'white'}
      color={color || 'black'}
      m={['6rem', '8rem']}
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
