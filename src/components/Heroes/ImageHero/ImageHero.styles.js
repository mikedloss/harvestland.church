import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { breakpointValues as bp, colors } from '../../theme';

export const ImageHeroStyle = styled.section`
  background-color: #000;
  color: #fff;
  display: block;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  height: ${(props) => `${getHeight(props.height)};`};

  ${(props) =>
    Array.isArray(props.height) &&
    `@media screen and (min-width: ${bp.LARGE}px) {
    height: ${getHeight(props.height, 1)};
  }`}
`;

export const StaticImage = styled(Box)`
  height: 100%;
  width: 100%;
  background-image: url('${(props) => props.src}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

export const MediaContainer = styled.div`
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  opacity: ${(props) => props.opacity};
  height: 100%;

  ${(props) =>
    props.overlay &&
    `
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props.overlay.color || colors.primaryLight};
      opacity: .5;
    }
    `}
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

export const getHeight = (height, index = 0) => {
  return height
    ? Array.isArray(height)
      ? `${height[index]}`
      : `${height}`
    : '25vh';
};
