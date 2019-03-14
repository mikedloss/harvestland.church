import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './Button.styles';

export const Button = ({ children, variant, small, ...props }) => {
  return (
    <Styles.ButtonStyle variant={variant} small={small} {...props}>
      {children}
    </Styles.ButtonStyle>
  );
};

Button.defaultProps = {
  variant: 'default',
};

Buffer.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};
