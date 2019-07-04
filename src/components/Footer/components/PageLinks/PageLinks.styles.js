import styled from 'styled-components';
import { Text, Heading, Box } from 'rebass';

export const PageLinkStyle = styled(Text)``;
PageLinkStyle.defaultProps = {
  fontSize: 0,
};

export const LinkText = styled(Heading)`
  cursor: pointer;
`;
LinkText.defaultProps = {
  color: 'primary',
};

export const SubLinkContainer = styled(Box)`
  margin: 0.5rem;
  margin-right: auto;
`;

export const SubLinkText = styled(Text)`
  cursor: pointer;
  font-weight: 600;
  padding: 0.125rem;
`;
SubLinkText.defaultProps = {
  color: 'primaryLight',
  fontSize: 2,
};
