import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Text, Flex } from 'rebass';

import { Layout, SEO, Hero, Button, Container } from '../components';

const SEOKeywords = [
  'harvestland address',
  'harvestland phone number',
  'harvestland service times',
  'service times',
  'harvestland email address',
];

const VisitPage = ({ data: { heroImage } }) => {
  return (
    <Layout>
      <SEO title="Visit" keywords={SEOKeywords} />
      <Hero.Image
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '50vh']}
      >
        <Heading p="20px" fontSize={[6, 7]}>
          Visit Us
        </Heading>
      </Hero.Image>
      <Container>
        <Flex flexDirection="column" alignItems="center" mb="2rem">
          <Heading my="4px" fontSize={5}>
            Sundays at 10 AM
          </Heading>
          <Heading my="4px" fontSize={5}>
            Wednesdays at 7 PM
          </Heading>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading>We're located in Clarkston, MI</Heading>
          <Text fontSize={1}>(about 45 minutes north of Detroit)</Text>
          <br />
          <Text>5848 Clintonville Road</Text>
          <Text>Clarkston, MI 48348</Text>
          <a
            href="https://www.google.com/maps/place/Harvestland+Church/@42.7239926,-83.3515662,17z/data=!3m1!4b1!4m2!3m1!1s0x88249696df557aad:0xeb5977355f99074?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button mt="16px" variant="default">
              Get Directions
            </Button>
          </a>
        </Flex>
      </Container>
      <Container>
        <Flex flexDirection="column" alignItems="center" mb="2rem">
          <Heading>Office Phone Number</Heading>
          <Text>
            <a href="tel:+12482912063">248-291-2063</a>
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading>Email</Heading>
          <Text>
            <a href="mailto:info@harvestland.church">info@harvestland.church</a>
          </Text>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/pages/visit/header.png" }) {
      ...FullWidthImage
    }
  }
`;

export default VisitPage;
