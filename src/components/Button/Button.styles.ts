import styled from 'styled-components';
import { Button } from 'rebass';

export const ButtonStyle = styled(Button)`
  font-size: ${({ small }) => (small ? '0.825rem' : '1rem')};
  padding: ${({ small }) => (small ? '0.25rem 0.75rem' : '0.75rem 1.25rem')};
`;

ButtonStyle.defaultProps = {
  as: 'button',
  fontWeight: 'bold',
  borderRadius: '4rem',
};
