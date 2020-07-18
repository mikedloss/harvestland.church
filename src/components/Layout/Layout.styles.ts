import styled from 'styled-components';
import { Box } from 'rebass';

export interface SiteContainerProps {
  isFullWidth: boolean;
}
export const SiteContainer = styled(Box)<SiteContainerProps>`
  margin: 0 auto;
  ${({ isFullWidth }) =>
    !isFullWidth && 'max-width: 1600px;'} ${'' /* max-width: 1600px; */};
`;
