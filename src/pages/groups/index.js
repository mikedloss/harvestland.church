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
  const {
    heroImage,
    gamingTable,
    mens,
    moreThanMarried,
    united,
    womens,
  } = props.data;
  // TODO: Need to put this stuff into Contentful
  return (
    <Layout>
      <SEO title="Groups" keywords={[`gatsby`, `application`, `react`]} />
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
          <TextHero>Grow in Christ together.</TextHero>
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
      <GroupHero
        imageSrc={gamingTable.childImageSharp.fluid.src}
        groupName="The Gaming Table"
        groupFrequency="once a month"
      >
        We connect with each other in a way that lets you focus on something fun
        with people who like playing board and card games. We have games of all
        difficulties that cater to people of all ages.
      </GroupHero>
      <GroupHero
        imageSrc={moreThanMarried.childImageSharp.fluid.src}
        groupName="More Than Married"
        groupFrequency="once a month"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia, erat in aliquet dapibus, lectus mi volutpat nisi, eget
        consequat ante metus eu mauris. Maecenas cursus est eget sed.
      </GroupHero>
      <GroupHero
        imageSrc={united.childImageSharp.fluid.src}
        groupName="United"
        groupFrequency="once a month"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia, erat in aliquet dapibus, lectus mi volutpat nisi, eget
        consequat ante metus eu mauris. Maecenas cursus est eget sed.
      </GroupHero>
      <GroupHero
        imageSrc={mens.childImageSharp.fluid.src}
        groupName="Mens Bible Study"
        groupFrequency="every Sunday"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia, erat in aliquet dapibus, lectus mi volutpat nisi, eget
        consequat ante metus eu mauris. Maecenas cursus est eget sed.
      </GroupHero>
      <GroupHero
        imageSrc={womens.childImageSharp.fluid.src}
        groupName="Womens Bible Study"
        groupFrequency="every Sunday"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia, erat in aliquet dapibus, lectus mi volutpat nisi, eget
        consequat ante metus eu mauris. Maecenas cursus est eget sed.
      </GroupHero>
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/groups-header.jpg" }) {
      ...FullWidthImage
    }
    gamingTable: file(relativePath: { eq: "images/groups/gaming-table.jpg" }) {
      ...FullWidthImage
    }
    mens: file(relativePath: { eq: "images/groups/mens.jpg" }) {
      ...FullWidthImage
    }
    moreThanMarried: file(
      relativePath: { eq: "images/groups/more-than-married.jpg" }
    ) {
      ...FullWidthImage
    }
    united: file(relativePath: { eq: "images/groups/united.jpg" }) {
      ...FullWidthImage
    }
    womens: file(relativePath: { eq: "images/groups/womens.jpg" }) {
      ...FullWidthImage
    }
  }
`;

export default GroupsPage;
