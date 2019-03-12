import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Heading, Text, Box, Flex } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
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
  const { heroImage, igniteImage } = props.data;
  return (
    <Layout>
      <SEO title="Groups" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '50vh']}
      >
        <Heading p="1.25rem" fontSize={[6, 7]}>
          Groups
        </Heading>
      </ImageHero>
      <Container>
        <Flex flexDirection="column" alignItems="center">
          <Heading mb="0.75rem">Grow in Christ together</Heading>
          <Text>
            Spiritual, emotional and relational growth takes place as everyone
            shares in the everyday experiences of life, and we want to encourage
            people to engage with each other and share the growth they are
            encountering. We demonstrate this in what we call{' '}
            <strong>Build</strong> groups and <strong>Equip</strong> groups.
          </Text>
        </Flex>
      </Container>
      <ImageHero
        imageSrc={igniteImage.childImageSharp.fluid.src}
        height="40vh"
        textAlign="flex-start"
        textJustify="flex-start"
      >
        <HeroContentContainer alignItems="center">
          <Box width={[null, '50%']}>
            <Heading py="1rem" fontSize={[5, 6]}>
              IGNITE Youth
            </Heading>
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
    igniteImage: file(relativePath: { eq: "images/groups/ignite.jpg" }) {
      ...FullWidthImage
    }
  }
`;

export default GroupsPage;
