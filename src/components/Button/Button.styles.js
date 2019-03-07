import styled from 'styled-components';
import { Button } from 'rebass';

export const ButtonStyle = styled(Button)``;

ButtonStyle.defaultProps = {
  as: 'button',
  p: '0.75rem 1.25rem',
  fontWeight: 'bold',
  borderRadius: '4rem',
};
