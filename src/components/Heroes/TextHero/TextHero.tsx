import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';

import * as Styled from './TextHero.styles';

export const TextHero = ({ useMargin, children, ...props }) => {
  return (
    <Styled.TextHeroStyle
      m={useMargin && ['8rem 4rem', '8rem']}
      p={!useMargin && ['8rem 4rem', '8rem']}
      {...props}
    >
      {children ? children : <Heading fontSize={6}>Text Hero</Heading>}
    </Styled.TextHeroStyle>
  );
};

TextHero.propTypes = {
  useMargin: PropTypes.bool,
  children: PropTypes.node,
};
