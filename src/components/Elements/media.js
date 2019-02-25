import styled from 'styled-components';
import { breakpoints as bp } from './theme';

export const SmallOnly = styled.div`
  @media screen and (min-width: ${bp.SMALL}) {
    display: none;
  }
`;

export const NotSmall = styled.div`
  @media screen and (max-width: ${bp.SMALL}) {
    display: none;
  }
`;
