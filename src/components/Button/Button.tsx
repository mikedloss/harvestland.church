import React from 'react';
import { ButtonProps as RButtonProps } from 'rebass';

import * as Styled from './Button.styles';

interface ButtonProps extends RButtonProps {
  variant?: string;
  small?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  small = false,
  children,
  ...props
}) => {
  return (
    <Styled.ButtonStyle variant={variant} small={!!small} {...props}>
      {children}
    </Styled.ButtonStyle>
  );
};
