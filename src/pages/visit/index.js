import React from 'react';
import { Link, graphql } from 'gatsby';
import { Heading, Text, Flex, Box } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TextHero from '../../components/Heroes/TextHero';
import ImageHero from '../../components/Heroes/ImageHero';
import Button from '../../components/Button';
import { ContentContainer as Container } from '../../components/Layout/Layout.styles';

const AboutPage = (props) => {
  const { heroImage } = props.data;
  console.log(props);
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        text="Visit Us"
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '50vh']}
      />
      <Container>
        <Flex flexDirection="column" alignItems="center" mb="2rem">
          <Heading my="4px" fontSize={5}>Sundays at 10 AM</Heading>
          <Heading my="4px" fontSize={5}>Wednesdays at 7 PM</Heading>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading>We're located in Clarkston, MI</Heading>
          <Text fontSize={1}>(about 45 minutes north of Detroit)</Text>
          <br />
          <Text>5848 Clintonville Road</Text>
          <Text>Clarkston, MI 48348</Text>
          <a href="https://www.google.com/maps/place/Harvestland+Church/@42.7239926,-83.3515662,17z/data=!3m1!4b1!4m2!3m1!1s0x88249696df557aad:0xeb5977355f99074?hl=en" target="_blank" rel="noopener noreferrer">
            <Button mt="16px" variant="default">Get Directions</Button>
          </a>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/visit-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;