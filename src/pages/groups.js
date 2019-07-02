import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Text, Box, Flex } from 'rebass';

import { Layout, SEO, Hero, Container } from '../components';

const GroupsPage = ({ data: { heroImage, groups }, ...props }) => {
  // if you need to save API calls from Contentful, just add this stuff locally
  return (
    <Layout>
      <SEO title="Groups" keywords={['community', 'groups', 'connections']} />
      <Hero.Image
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['40vh', '50vh']}
      >
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
      {groups.edges.map(({ node }) => {
        return (
          <Hero.Group
            key={node.id}
            imageSrc={node.groupImage.fluid.src}
            imageDesc={node.groupImage.title}
            groupName={node.groupName}
            groupFrequency={node.groupFrequency}
          >
            {node.groupDescription.groupDescription}
          </Hero.Group>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/pages/groups/header.jpg" }) {
      ...FullWidthImage
    }
    groups: allContentfulGroup(sort: { fields: [groupName], order: ASC }) {
      edges {
        node {
          id
          groupName
          groupFrequency
          groupDescription {
            groupDescription
          }
          groupImage {
            title
            fluid(maxWidth: 1600) {
              src
            }
          }
        }
      }
    }
  }
`;

export default GroupsPage;
