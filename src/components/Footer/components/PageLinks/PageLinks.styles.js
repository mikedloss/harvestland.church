import styled from 'styled-components';
import { Text } from 'rebass';

export const PageLinkStyle = styled(Text)``;
PageLinkStyle.defaultProps = {
  fontSize: 0,
};

export const LinkText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;
LinkText.defaultProps = {
  as: 'a',
  color: 'primary',
};
