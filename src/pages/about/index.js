import React from 'react';
import { Link, graphql } from 'gatsby';
import { Text, Flex, Box } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TextHero from '../../components/Heroes/TextHero';
import Button from '../../components/Button';
import { ContentContainer as Container } from '../../components/Layout/Layout.styles';
import Side2SideHero from '../../components/Heroes/Side2SideHero';

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
        <Box width="100%" px={['2rem', '8rem', '20rem']}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text>
              Our mission is to <strong>win</strong> people to Jesus, and to{' '}
              <strong>build</strong> a community where people are{' '}
              <strong>equipped</strong> to do God's work.
            </Text>
            <Text mt="1rem" mb="2rem">
              No matter what your background is or what you've been through, you
              are welcome here. Join us for our Sunday service and be a part of
              our family.
            </Text>
            <Link to="/about/beliefs">
              <Button variant="inverse">Our beliefs</Button>
            </Link>
            <Link to="/about/leaders">
              <Button variant="inverse" my="1rem">
                Our leaders
              </Button>
            </Link>
          </Flex>
        </Box>
      </Container>
      <Side2SideHero
        heroText="What to expect"
        imageSrc={heroImage.childImageSharp.fluid.src}
        height="40vh"
      >
        <Text my="12px">
          We open up in praise and worship, listen to a message from our Pastor,
          and close in prayer. Our services are about 90 minutes long.
        </Text>
        <Text my="12px">
          We offer a kids service during our Sunday worship service where they
          will learn about God in a safe and fun environment in ways that they
          are able to understand who He is and how He has a purpose for our
          lives.
        </Text>
        <Text my="12px">
          Our guests all have different backgrounds and come from different
          walks of life. We don't expect anyone to dress up, we want you to come
          are you are.
        </Text>
      </Side2SideHero>
      <Side2SideHero
        heroText="something"
        imageSrc={heroImage.childImageSharp.fluid.src}
        height="20vh"
      >
        <Text>Description about ministry</Text>
      </Side2SideHero>
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
