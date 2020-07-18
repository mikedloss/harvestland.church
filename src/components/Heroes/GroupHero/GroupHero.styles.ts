import styled from 'styled-components';
import { Flex } from 'rebass';

import { breakpointValues as bp } from '../../../components/theme';

export interface HeroContentContainerProps {
  inverse: boolean;
}
export const HeroContentContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${bp.SMALL}px) {
    flex-direction: ${({ inverse }) => (inverse ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
`;
