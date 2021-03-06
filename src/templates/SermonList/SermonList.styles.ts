import styled from 'styled-components';
import { Link as RebassLink } from 'rebass';
import { breakpointValues as bp } from '../../components/theme';

export const ImageContainer = styled.div`
  width: 200px;

  @media screen and (min-width: ${bp.MEDIUM}px) {
    width: 300px;
  }
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

export const Link = styled(RebassLink)`
  display: inline-block;
`;
