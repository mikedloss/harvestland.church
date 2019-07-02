import styled from 'styled-components';
import { Box } from 'rebass';

export const SiteContainer = styled(Box)`
  margin: 0 auto;
  ${({ isFullWidth }) =>
    !isFullWidth && 'max-width: 1600px;'} ${'' /* max-width: 1600px; */};
`;
