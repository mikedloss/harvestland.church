import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './Button.styles';

export const Button = ({ children, variant, ...props }) => {
  return (
    <Styles.ButtonStyle variant={variant} {...props}>
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
