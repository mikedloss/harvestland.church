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
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <TextHero color="black">
        <Text>Win.</Text>
        <Text>Build.</Text>
        <Text>Equip.</Text>
      </TextHero>
      <Container>
        <Flex justifyContent="center">
          <Text>
            Our mission is to <strong>win</strong> people to Jesus, and to{' '}
            <strong>build</strong> a community where people are{' '}
            <strong>equipped</strong> to do God's work.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100%">
            <Link to="/about/beliefs">
              <Button variant="default">Beliefs</Button>
            </Link>
          </Box>
          <Link to="/about/leaders">
            <Button variant="inverse">Leaders</Button>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/about-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
