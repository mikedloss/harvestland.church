import styled from 'styled-components';
import { Flex } from 'rebass';
import { breakpointValues as bp } from '../../theme';
import { getHeight } from '../ImageHero/ImageHero.styles';

export const Side2SideHeroStyle = styled(Flex)`
  flex-direction: column;

  @media screen and (min-width: ${bp.LARGE}px) {
    flex-direction: ${(props) => (props.inverse ? 'row-reverse' : 'row')};
  }
`;
export const HeroContainer = styled(Flex)`
  width: 100%;
  height: ${(props) => `${getHeight(props.height)};`};

  @media screen and (min-width: ${bp.LARGE}px) {
    width: ${props => props.imageWidth || "50%"};
    height: ${(props) => `${getHeight(props.height, 1)};`};
  }
`;
export const TextBlockContainer = styled(Flex)`
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: ${bp.LARGE}px) {
    width: ${props => props.imageWidth ? `calc(100% - ${props.imageWidth})` : "50%"};
    align-items: ${(props) => props.textBlockJustify || 'flex-start'};
  }
`;
