import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { breakpointValues as bp } from '../../theme';

// TODO: fix these video styles... they need to be more robust, and easily changeable
export const VideoHeroStyle = styled.section`
  background-color: #000;
  color: #fff;
  display: block;
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  width: 100%;
  max-height: 720px;
  overflow: hidden;
`;

export interface StaticImageProps {
  height: string | string[];
  src: string;
}
export const StaticImage = styled(Box)<StaticImageProps>`
  height: ${({ height }) => (height ? `${height}` : '40vh')};
  ${'' /* width: 100%; */}
  background-image: url('${({ src }) => src}');
  background-position: center center;
  background-repeat: no-repeat;
  ${'' /* background-attachment: fixed; */}
  background-size: cover;
`;

export const MediaContainer = styled.div`
  display: block;
  box-sizing: border-box;
  overflow: hidden;
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

export const Video = styled.video`
  box-sizing: border-box;
  display: block;
  object-fit: cover;
  min-width: 100%;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  min-height: 320px;

  @media screen and (min-width: ${bp.SMALL}px) {
    min-height: inherit;
  }
`;
