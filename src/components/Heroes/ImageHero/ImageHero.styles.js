import styled from 'styled-components';
import { Heading, Flex, Box } from 'rebass';
import { breakpointValues as bp } from '../../Elements/theme';

export const ImageHeroStyle = styled.section`
  background-color: #000;
  color: #fff;
  display: block;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;

export const StaticImage = styled(Box)`
  height: ${(props) => `${getHeight(props.height)};`}
  width: 100%;
  background-image: url('${(props) => props.src}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    Array.isArray(props.height) &&
    `@media screen and (min-width: ${bp.SMALL}px) {
      height: ${getHeight(props.height, 1)};
    }`}
`;

export const MediaContainer = styled.div`
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0.5;
`;

export const TextContainer = styled.div`
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
`;

export const TextOverlay = styled(Flex)`
  height: 100%;
`;

export const WelcomeText = styled(Heading)`
  text-align: center;
`;

const getHeight = (height, index = 0) => {
  return height
    ? Array.isArray(height)
      ? `${height[index]}`
      : `${height}`
    : '40vh';
};
