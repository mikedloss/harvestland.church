import styled from "styled-components";
import { Link } from "gatsby";
import { Flex, Text } from "rebass";

export const AlertTextLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AlertText = styled(Text)``;
AlertText.defaultProps = {
  color: "white"
};
