import React from 'react';
import { Link } from 'gatsby';
import { Flex, Heading } from 'rebass';

import * as Styled from './PageLinks.styles';
import { links, LinkRoute } from '../../../Header/links';

const buildLinks = (link: LinkRoute[], isInDropdown = false) => {
  const allLinks = links.map((link) => {
    if (link.dropdown) {
      return (
        <Flex
          flexDirection="column"
          key={`footer-${link.label}-dropdown`}
          alignItems="flex-start"
        >
          <Heading color="primary">{link.label}</Heading>
          <Styled.SubLinkContainer>
            {buildLinks(link.dropdownContent, true)}
          </Styled.SubLinkContainer>
        </Flex>
      );
    } else {
      return (
        <Link to={link.route} key={`footer-${link.label}`}>
          {isInDropdown ? (
            <Styled.SubLinkText>{link.label}</Styled.SubLinkText>
          ) : (
            <Styled.LinkText>{link.label}</Styled.LinkText>
          )}
        </Link>
      );
    }
  });

  return allLinks;
};

export const PageLinks = () => {
  return <Flex flexDirection="column">{buildLinks(links)}</Flex>;
};
