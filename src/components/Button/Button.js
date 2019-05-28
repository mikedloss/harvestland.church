import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Button.styles';

export const Button = ({ children, variant, small, ...props }) => {
  return (
    <Styled.ButtonStyle variant={variant} small={small} {...props}>
      {children}
    </Styled.ButtonStyle>
  );
};

Button.defaultProps = {
  variant: 'default',
};

Buffer.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};
