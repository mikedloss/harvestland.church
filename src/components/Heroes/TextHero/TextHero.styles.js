import styled from 'styled-components';
import { Flex } from 'rebass';

export const TextHeroStyle = styled(Flex)`
  text-align: center;
`;

TextHeroStyle.defaultProps = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'white',
}