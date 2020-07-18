import styled from 'styled-components';
import { Flex } from 'rebass';
import { breakpointValues as bp } from '../../theme';
import { getHeight } from '../ImageHero/ImageHero.styles';

export interface Side2SideHeroStyleProps {
  inverse: boolean;
}
export const Side2SideHeroStyle = styled(Flex)<Side2SideHeroStyleProps>`
  flex-direction: column;

  @media screen and (min-width: ${bp.LARGE}px) {
    flex-direction: ${({ inverse }) => (inverse ? 'row-reverse' : 'row')};
  }
`;

export interface HeroContainerProps {
  height?: string | string[];
  imageWidth: string;
}
export const HeroContainer = styled(Flex)<HeroContainerProps>`
  width: 100%;
  height: ${({ height }) => `${getHeight(height)};`};

  @media screen and (min-width: ${bp.LARGE}px) {
    width: ${({ imageWidth }) => imageWidth || '50%'};
    height: ${({ height }) => `${getHeight(height, 1)};`};
  }
`;

export interface TextBlockContainerProps {
  imageWidth: string;
  textBlockJustify?: string;
}
export const TextBlockContainer = styled(Flex)<TextBlockContainerProps>`
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: ${bp.LARGE}px) {
    width: ${({ imageWidth }) =>
      imageWidth ? `calc(100% - ${imageWidth})` : '50%'};
    align-items: ${({ textBlockJustify }) => textBlockJustify || 'flex-start'};
  }
`;
