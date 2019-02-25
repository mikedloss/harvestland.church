import { Heading, Box, Text, Flex } from 'rebass';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <Flex alignItems="center" bg="white" py="16px" px="16px" my="0" mx="auto">
    <Box>
      <Heading m="0" as="h1" fontSize={2}>
        <Link to="/" style={{ color: '#222', textDecoration: 'none' }}>
          {siteTitle}
        </Link>
      </Heading>
    </Box>
    <Box mx="auto" />
    <Flex direction="row" alignItems="center">
      <Text mx="8px">Welcome</Text>
      <Text mx="8px">Welcome</Text>
    </Flex>
  </Flex>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
