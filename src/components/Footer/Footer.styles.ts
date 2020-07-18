import styled from 'styled-components';
import { Text, Flex, Box, Image } from 'rebass';

export const FooterStyle = styled(Flex).attrs({
  as: 'footer',
  p: 16,
  bg: 'offWhite',
  color: 'black',
  flexDirection: ['column-reverse', 'row'],
  alignItems: [null, 'center'],
  justifyContent: ['flex-start', null],
})`
  max-width: 1600px;
  margin: 0 auto;
`;

export const Container = styled(Flex).attrs({
  my: 2,
})``;

export const LeftContainer = styled(Box)``;

export const CenterContainer = styled(Flex)``;

export const RightContainer = styled(Flex)``;

export const ContentfulImage = styled(Image)`
  max-width: 100px;
`;

export const SmallLine = styled(Text).attrs({
  fontSize: 0,
  lineHeight: 'normal',
})``;

export const LinkText = styled(Text).attrs({
  as: 'a',
  color: 'primary',
})`
  text-decoration: none;
`;
