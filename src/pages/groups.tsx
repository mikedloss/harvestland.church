import React from 'react';
import { Heading, Text, Box, Flex } from 'rebass';

import { Layout, SEO, Hero, Container } from '../components';
import { useGroupsPageQuery } from '../queries';

const GroupsPage: React.FC = () => {
  // if you need to save API calls from Contentful, just add this stuff locally
  const { heroImage, groups } = useGroupsPageQuery();
  return (
    <Layout>
      <SEO title="Groups" keywords={['community', 'groups', 'connections']} />
      <Hero.Image imageSrc={heroImage} height={['40vh', '50vh']}>
        <Heading p="1.25rem" fontSize={[6, 7]}>
          Groups
        </Heading>
      </Hero.Image>
      <Container>
        <Flex flexDirection="column" alignItems="center" mb="1rem">
          <Hero.Text>
            <Heading fontSize={6} color="primary">
              Grow in Christ together.
            </Heading>
          </Hero.Text>
          <Box width="100%" px={['2rem', '4rem']}>
            <Text>
              One of our core principles at Harvestland is to have healthy small
              groups where our guests can be in a positive environment with a
              focus on Jesus Christ. We call these{' '}
              <Heading fontSize={3} as="span" color="primary">
                Build
              </Heading>{' '}
              groups. It's a one key part of our mission at Harvestland Church.
            </Text>
          </Box>
        </Flex>
      </Container>
      {groups.map((group) => {
        return (
          <Hero.Group
            key={group.id}
            imageSrc={group.groupImage.src}
            imageDesc={group.groupImage.title}
            groupName={group.groupName}
            groupFrequency={group.groupFrequency}
          >
            {group.groupDescription}
          </Hero.Group>
        );
      })}
    </Layout>
  );
};

export default GroupsPage;
