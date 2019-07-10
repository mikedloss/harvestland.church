import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Text, Flex, Card } from 'rebass';

import { Layout, SEO, Hero, Button, Container } from '../../components';

import * as Styled from '../../page-styles/children-page';

const SEOKeywords = [
  'harvestland church kids',
  'harvestland kids',
  'harvestland kid',
  'harvestland children',
  'harvestland children ministry',
];

const ChildrenPage = ({ data: { heroImage, kidsLogo } }) => {
  return (
    <Layout>
      <SEO title="Harvestland Kids" keywords={SEOKeywords} />
      <Hero.Image
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '50vh']}
      >
        <Flex alignItems="center" justifyContent="center" width="100%">
          <Styled.KidsLogo
            src={kidsLogo.childImageSharp.fluid.src}
            alt="Harvestland Kids"
          />
        </Flex>
      </Hero.Image>
      <Container>
        <Hero.Text p="2rem">
          <Text>
            Every Sunday, infants through children in fifth grade experience a
            safe, age-appropriate environment where the Bible is taught in a
            creative and relevant way.
          </Text>
        </Hero.Text>
        <Hero.Image>
          {/* <Heading mb="1rem">Your First Visit</Heading>
          <Text mb="1rem">
            Your first stop when you arrive is the first-time check in area. We
            want to serve you and your child well, so we’ll take some time to
            get to know you. We’ll ask about allergies, make sure we know what
            your child likes to be called, and collect your contact information.
          </Text>
          <Text>
            Then, you a code designated for your child. If for any reason we
            need to reach you during our service, you’ll see your kid’s code in
            the lower corner of the screen. This code is also what you’ll use to
            pick-up your child after service.
          </Text> */}
        </Hero.Image>
        <Hero.Side2Side height="50vh" imageWidth="60%">
          <Heading mb="1rem">Your First Visit</Heading>
          <Text mb="1rem">
            Your first stop when you arrive is the first-time check in area. We
            want to serve you and your child well, so we’ll take some time to
            get to know you. We’ll ask about allergies, make sure we know what
            your child likes to be called, and collect your contact information.
          </Text>
          <Text>
            Then, you a code designated for your child. If for any reason we
            need to reach you during our service, you’ll see your kid’s code in
            the lower corner of the screen. This code is also what you’ll use to
            pick-up your child after service.
          </Text>
        </Hero.Side2Side>
        <Hero.Side2Side height="50vh" imageWidth="60%" inverse>
          <Heading mb="1rem">Your First Visit</Heading>
          <Text mb="1rem">
            Your first stop when you arrive is the first-time check in area. We
            want to serve you and your child well, so we’ll take some time to
            get to know you. We’ll ask about allergies, make sure we know what
            your child likes to be called, and collect your contact information.
          </Text>
          <Text>
            Then, you a code designated for your child. If for any reason we
            need to reach you during our service, you’ll see your kid’s code in
            the lower corner of the screen. This code is also what you’ll use to
            pick-up your child after service.
          </Text>
        </Hero.Side2Side>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/pages/children/header.jpg" }) {
      ...FullWidthImage
    }
    kidsLogo: file(
      relativePath: { eq: "images/pages/children/kids-logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ChildrenPage;
