import styled from 'styled-components';
import { Text, Flex, Box, Image } from 'rebass';

export const FooterStyle = styled(Flex)``;
FooterStyle.defaultProps = {
  p: 16,
  bg: 'offWhite',
  color: 'black',
};

export const Container = styled(Flex)``;
Container.defaultProps = {
  my: 2,
};

export const LeftContainer = styled(Box)``;

export const CenterContainer = styled(Flex)``;

export const RightContainer = styled(Flex)``;

export const ContentfulImage = styled(Image)`
  max-width: 100px;
`;

export const SmallLine = styled(Text)``;
SmallLine.defaultProps = {
  fontSize: 0,
  lineHeight: 'normal',
};

export const LinkText = styled(Text)`
  text-decoration: none;
`;
LinkText.defaultProps = {
  as: 'a',
  color: 'primary',
};
