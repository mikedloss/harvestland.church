import styled from 'styled-components';
import { Flex } from 'rebass';
import { breakpointValues as bp } from '../../Elements/theme';

export const Side2SideHeroStyle = styled(Flex)`
  flex-direction: column;

  @media screen and (min-width: ${bp.LARGE}px) {
    flex-direction: row;
  }
`;
export const HeroContainer = styled(Flex)`
  width: 100%;
  height: ${(props) => `${getHeight(props.height)};`};

  @media screen and (min-width: ${bp.LARGE}px) {
    width: 50%;
    height: ${(props) => `${getHeight(props.height, 1)};`};
  }
`;
export const TextBlockContainer = styled(Flex)`
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: ${bp.LARGE}px) {
    width: 50%;
    align-items: ${(props) => props.textBlockJustify || 'flex-start'};
  }
`;

const getHeight = (height, index = 0) => {
  console.log(height, index);
  return height
    ? Array.isArray(height)
      ? `${height[index]}`
      : `${height}`
    : '25vh';
};
