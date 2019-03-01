import React from 'react';
import { Heading, Text, Flex } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { graphql } from 'gatsby';
import ImageHero from '../../components/Heroes/ImageHero';

import * as LayoutStyle from '../../components/Layout/Layout.styles';

const GivePage = (props) => {
  const { image } = props.data;
  return (
    <Layout>
      <SEO title="Give" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        text="Give Online"
        imageSrc={image.childImageSharp.fluid.src}
        height="30vh"
      />
      <LayoutStyle.ContentContainer>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="1rem"
        >
          <Heading>"It is more blessed to give than to receive."</Heading>
          <Text fontSize={1}>Acts 20:35</Text>
        </Flex>
        <Text>
          Giving gives us an opportunity to give back to God a portion of what
          He's so graciously given us in our lives. By giving, we demonstrate a
          couple key things - that we trust Him with all of our needs, and that
          we support the church to keep reaching out beyond these 4 walls to
          help our community.
        </Text>
        <Flex flexDirection="column" my="2rem">
          <Heading>It's Safe</Heading>
          <Text>
            The data you enter in is done so on a secure webpage, meaning you're
            in the likes of thousands of other online shops. Less people will
            see your information than if you were to use paper checks or the
            mailing system.
          </Text>
        </Flex>
        <Flex flexDirection="column" my="2rem">
          <Heading>It's Flexible</Heading>
          <Text>
            We give the option to do a one time gift, or you can see up a
            recurring gift on a schedule that fits your life. We also give you
            the choice to give to specific groups or funds we're currently
            raising money for, so your gift will get to the right group.
          </Text>
        </Flex>
        <Flex flexDirection="column" my="2rem">
          <Heading>It Supports Our Mission</Heading>
          <Text>
            Your giving directly supports the families and guests that come
            through our doors every single day. Your generosity makes it
            possible for us to impact children, students and adults through our
            ministry events. You allow us to support missionaries all over the
            world, reaching people we wouldn't normally be able to reach inside
            our building.
          </Text>
        </Flex>
      </LayoutStyle.ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  {
    image: file(relativePath: { eq: "images/give-header.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default GivePage;
