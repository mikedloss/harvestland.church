import styled from 'styled-components';
import { breakpointValues as bp } from './theme';

export const SmallOnly = styled.div`
  @media screen and (min-width: ${bp.SMALL}px) {
    display: none;
  }
`;

export const NotSmall = styled.div`
  @media screen and (max-width: ${bp.SMALL - 1}px) {
    display: none;
  }
`;
