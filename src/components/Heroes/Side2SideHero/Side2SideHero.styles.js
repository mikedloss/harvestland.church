import styled from 'styled-components';
import { Flex } from 'rebass';
import { breakpointValues as bp } from '../../Elements/theme';

export const Side2SideHeroStyle = styled(Flex)`
  flex-direction: column;

  @media screen and (min-width: ${bp.SMALL}px) {
    flex-direction: row;
  }
`;
export const HeroContainer = styled(Flex)`
  width: 100%;

  @media screen and (min-width: ${bp.SMALL}px) {
    width: 50%;
  }
`;
export const TextBlockContainer = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${bp.SMALL}px) {
    width: 50%;
    justify-content: ${(props) => props.textBlockJustify || 'flex-start'};
  }
`;
