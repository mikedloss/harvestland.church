import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';

import * as Styles from './TextHero.styles';

export const TextHero = ({
  useMargin,
  bg,
  alignItems,
  justifyContent,
  flexDirection,
  children,
}) => {
  return (
    <Styles.TextHeroStyle
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      bg={bg}
      m={useMargin && ['6rem', '8rem']}
      p={!useMargin && ['6rem', '8rem']}
    >
      {children ? (
        children
      ) : (
        <Heading fontSize={6}>Text Hero</Heading>
      )}
    </Styles.TextHeroStyle>
  );
};

TextHero.propTypes = {
  useMargin: PropTypes.bool,
  bg: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
};
