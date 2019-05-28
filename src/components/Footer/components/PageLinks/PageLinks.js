import React from 'react';
import { Link } from 'gatsby';
import { Flex, Heading } from 'rebass';

import * as Styled from './PageLinks.styles';

const PageLink = ({ to, children }) => (
  <Heading>
    <Styled.LinkText as={Link} to={to}>
      {children}
    </Styled.LinkText>
  </Heading>
);

export const PageLinks = () => {
  return (
    <Flex flexDirection="column">
      <PageLink to="about">About</PageLink>
      <PageLink to="groups">Groups</PageLink>
      <PageLink to="sermons">Sermons</PageLink>
      <PageLink to="events">Events</PageLink>
      <PageLink to="visit">Visit</PageLink>
      <PageLink to="give">Give</PageLink>
    </Flex>
  );
};
