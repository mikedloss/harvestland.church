import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Text, Box, Flex } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import TextHero from '../../components/Heroes/TextHero';
import GroupHero from '../../components/Heroes/GroupHero';
import { ContentContainer as Container } from '../../components/Layout/Layout.styles';

const GroupsPage = (props) => {
  const { heroImage, groups } = props.data;
  // if you need to save API calls from Contentful, just add this stuff locally
  return (
    <Layout>
      <SEO title="Groups" keywords={['community', 'groups', 'connections']} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['40vh', '50vh']}
      >
        <Heading p="1.25rem" fontSize={[6, 7]}>
          Groups
        </Heading>
      </ImageHero>
      <Container>
        <Flex flexDirection="column" alignItems="center" mb="1rem">
          <TextHero>
            <Heading fontSize={6} color="primary">
              Grow in Christ together.
            </Heading>
          </TextHero>
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
          <GroupHero
            key={node.id}
            imageSrc={node.groupImage.fluid.src}
            imageDesc={node.groupImage.title}
            groupName={node.groupName}
            groupFrequency={node.groupFrequency}
          >
            {node.groupDescription.groupDescription}
          </GroupHero>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/groups-header.jpg" }) {
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
