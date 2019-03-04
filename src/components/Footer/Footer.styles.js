import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';

export const FooterStyle = styled(Flex)``;

export const Container = styled(Flex)``;

export const LeftContainer = styled(Box)``;
export const RightContainer = styled(Flex)``;

export const SmallLine = styled(Text)``;

export const LinkText = styled(Text)`
  text-decoration: none;
`;

Container.defaultProps = {
  my: '8px',
};

SmallLine.defaultProps = {
  fontSize: 0,
  lineHeight: 'normal',
};

LinkText.defaultProps = {
  as: 'a',
  color: 'primary',
};
