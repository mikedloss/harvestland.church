import styled from 'styled-components';
import { Flex } from 'rebass';

import { breakpointValues as bp } from '../components/theme';

export const ButtonLinksContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${bp.SMALL}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export interface HeroContentContainerProps {
  inverse?: boolean;
}
export const HeroContentContainer = styled(Flex)<HeroContentContainerProps>`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${bp.SMALL}px) {
    flex-direction: ${({ inverse }) => (inverse ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
`;

export const GroupsContent = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${bp.SMALL}px) {
    align-items: flex-start;
  }
`;
