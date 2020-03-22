import styled from "styled-components";
import { Link } from "gatsby";
import { Flex, Text } from "rebass";

const linkCss = `
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AlertTextLink = styled(Link)`
  ${linkCss}
`;

export const AlertTextLinkExternal = styled.a`
  ${linkCss}
`;

export const AlertText = styled(Text)``;
AlertText.defaultProps = {
  color: "white"
};
