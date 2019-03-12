import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Heading, Text, Box, Flex } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import TextHero from '../../components/Heroes/TextHero';
import { ContentContainer as Container } from '../../components/Layout/Layout.styles';

import { breakpointValues as bp } from '../../components/Elements/theme';

const HeroContentContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${bp.SMALL}px) {
    flex-direction: ${(props) => (props.inverse ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
`;

// const GroupsContent = styled(Flex)`
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media screen and (min-width: ${bp.SMALL}px) {
//     align-items: flex-start;
//   }
// `;

const GroupsPage = (props) => {
  const { heroImage, gamingTable, moreThanMarried } = props.data;
  return (
    <Layout>
      <SEO title="Groups" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '40vh', '50vh']}
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
      <ImageHero
        imageSrc={gamingTable.childImageSharp.fluid.src}
        height="40vh"
        textAlign="flex-start"
        textJustify="flex-start"
      >
        <HeroContentContainer alignItems="center">
          <Box width={[null, '50%']}>
            <Heading fontSize={[5, 6]}>The Gaming Table</Heading>
            <Text fontSize={3}>Meets once a month</Text>
          </Box>
          <Box width={[null, '50%']}>
            <Text>
              We get together and play board games. But even more, we connect
              with each other in a way that lets you focus on something fun with
              people who like playing games. We have games of all difficulties
              and cater to people of all ages.
            </Text>
          </Box>
        </HeroContentContainer>
      </ImageHero>
      <ImageHero
        imageSrc={moreThanMarried.childImageSharp.fluid.src}
        height="40vh"
        textAlign="flex-start"
        textJustify="flex-start"
      >
        <HeroContentContainer alignItems="center">
          <Box width={[null, '50%']}>
            <Heading fontSize={[5, 6]}>More Than Married</Heading>
            <Text fontSize={3}>Meets once a month</Text>
          </Box>
          <Box width={[null, '50%']}>
            <Text>
              We get together and play board games. But even more, we connect
              with each other in a way that lets you focus on something fun with
              people who like playing games. We have games of all difficulties
              and cater to people of all ages.
            </Text>
          </Box>
        </HeroContentContainer>
      </ImageHero>
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
    moreThanMarried: file(relativePath: { eq: "images/groups/more-than-married.jpg" }) {
      ...FullWidthImage
    }
  }
`;

export default GroupsPage;
