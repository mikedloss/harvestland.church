import styled from 'styled-components';
import { Button } from 'rebass';

interface ButtonStyleProps {
  small: boolean;
}

export const ButtonStyle = styled(Button).attrs({
  as: 'button',
  fontWeight: 'bold',
  borderRadius: '4rem',
})<ButtonStyleProps>`
  font-size: ${({ small }) => (small ? '0.825rem' : '1rem')};
  padding: ${({ small }) => (small ? '0.25rem 0.75rem' : '0.75rem 1.25rem')};
`;
