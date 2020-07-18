import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from 'rebass';

const linkCss = `
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AlertText = styled(Text).attrs({
  color: 'white',
})``;

export const AlertTextLink = styled(Link)`
  ${linkCss}
`;

export const AlertTextLinkExternal = styled.a`
  ${linkCss}
`;
