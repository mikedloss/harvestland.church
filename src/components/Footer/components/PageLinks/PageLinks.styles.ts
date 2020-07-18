import styled from 'styled-components';
import { Text, Heading, Box } from 'rebass';

export const PageLinkStyle = styled(Text).attrs({
  fontSize: 0,
})``;

export const LinkText = styled(Heading).attrs({
  color: 'primary',
})`
  cursor: pointer;
`;

export const SubLinkContainer = styled(Box)`
  margin: 0.5rem;
  margin-right: auto;
`;

export const SubLinkText = styled(Text).attrs({
  color: 'primaryLight',
  fontSize: 2,
})`
  cursor: pointer;
  font-weight: 600;
  padding: 0.125rem;
`;
