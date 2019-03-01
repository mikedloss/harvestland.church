import styled from 'styled-components';
import { Text } from 'rebass';

export const PageLinkStyle = styled(Text)``;

export const LinkText = styled(Text)`
  text-decoration: none;
`;

PageLinkStyle.defaultProps = {
  fontSize: 0,
};

LinkText.defaultProps = {
  as: 'a',
  color: 'primary',
};
