import styled from 'styled-components';
import { Button } from 'rebass';

export const ButtonStyle = styled(Button)`
  :hover {
    cursor: pointer;
  }
`;

ButtonStyle.defaultProps = {
  as: 'button',
  py: '8px',
  px: '16px',
  borderRadius: '0',
  fontWeight: 'bold',
};
