import React from 'react';
import { Link } from 'gatsby';
import { Flex, Heading, Text } from 'rebass';

import { Layout, Hero, Button } from '../components';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Hero.Text>
      <Flex flexDirection="column">
        <Heading>Page not found!</Heading>
        <Text>Unfortunately you reached a page that doesn't exist.</Text>
        <Link to="/">
          <Button mt="2rem">Go Home</Button>
        </Link>
      </Flex>
    </Hero.Text>
  </Layout>
);

export default NotFoundPage;
