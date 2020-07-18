import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Text, Flex, Box, Heading } from 'rebass';

import { Layout, SEO, Button, Container, Hero } from '../components';

import * as Styled from '../page-styles/about-page';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "images/pages/about/header2.jpg" }) {
        ...FullWidthImage
      }
      campfireImage: file(relativePath: { eq: "images/common/campfire2.jpg" }) {
        ...FullWidthImage
      }
    }
  `);
  console.log('data :>> ', data);

  const { heroImage, campfireImage } = data;

  return (
    <Layout>
      <SEO
        title="About"
        keywords={['help', 'harvestland beliefs', 'harvestland leaders']}
      />
      <Hero.Text>
        <Heading fontSize={6} color="black">
          Win.
        </Heading>
        <Heading fontSize={6} color="black">
          Build.
        </Heading>
        <Heading fontSize={6} color="black">
          Equip.
        </Heading>
      </Hero.Text>
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
            <Styled.ButtonLinksContainer mb="1rem">
              <Link to="/about/beliefs">
                <Button
                  variant="inverse"
                  mr={[null, '2rem']}
                  mb={['1rem', '0']}
                >
                  Our beliefs
                </Button>
              </Link>
              <Link to="/about/leaders">
                <Button variant="inverse">Our leaders</Button>
              </Link>
            </Styled.ButtonLinksContainer>
          </Flex>
        </Box>
      </Container>
      <Hero.Side2Side
        heroText="What to expect"
        imageSrc={heroImage.childImageSharp.fluid.src}
        height="45vh"
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
      </Hero.Side2Side>
      <Hero.Image
        imageSrc={campfireImage.childImageSharp.fluid.src}
        height={['60vh', '50vh']}
        textAlign="flex-start"
        textJustify="flex-start"
      >
        <Styled.HeroContentContainer alignItems="center">
          <Box width={[null, '40%']}>
            <Heading pb="2rem" fontSize={[5, 6]}>
              Groups
            </Heading>
          </Box>
          <Styled.GroupsContent width={[null, '60%']}>
            <Text>
              We want to offer a path for everyone to grow their faith in
              community. We have groups for all ages that give everyone that
              opportunity.
            </Text>
            <Link to="/groups">
              <Button mt="1rem">Learn More</Button>
            </Link>
          </Styled.GroupsContent>
        </Styled.HeroContentContainer>
      </Hero.Image>
    </Layout>
  );
};

// export const query = graphql`
//   {
//     heroImage: file(relativePath: { eq: "images/pages/about/header2.jpg" }) {
//       ...FullWidthImage
//     }
//     campfireImage: file(relativePath: { eq: "images/common/campfire2.jpg" }) {
//       ...FullWidthImage
//     }
//   }
// `;

export default AboutPage;
