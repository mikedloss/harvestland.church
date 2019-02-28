import styled from 'styled-components';
import { Heading, Flex, Box } from 'rebass';

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
  height: ${(props) => (props.height ? `${props.height}` : '40vh')};
  width: 100%;
  background-image: url('${(props) => props.src}');
  background-position: center center;
  background-repeat: no-repeat;
  ${'' /* background-attachment: fixed; */}
  background-size: cover;
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
  ::selection {
    background: #386238; /* WebKit/Blink Browsers */
    color: #fff;
  }
  ::-moz-selection {
    background: #386238; /* Gecko Browsers */
    color: #fff;
  }
`;
