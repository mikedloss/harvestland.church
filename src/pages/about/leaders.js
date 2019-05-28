import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Flex } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import LeaderInfo from '../../components/LeaderInfo';
import Container from '../../components/Container';

const LeadersPage = (props) => {
  const { heroImage, peteHeather, devanne, mike, willis, summer } = props.data;
  return (
    <Layout>
      <SEO title="Leaders" keywords={['harvestland leaders', 'leaders']} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['40vh', '50vh']}
      >
        <Heading p="20px" fontSize={[5, 6]}>
          Our Leaders
        </Heading>
      </ImageHero>
      <Container>
        <Flex flexDirection="column" alignItems="center">
          <LeaderInfo who="peteHeather" imageSrc={peteHeather} />
          <LeaderInfo who="devanne" imageSrc={devanne} />
          <LeaderInfo who="mike" imageSrc={mike} />
          <LeaderInfo who="willis" imageSrc={willis} />
          <LeaderInfo who="summer" imageSrc={summer} />
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  fragment leaderPicture on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  {
    heroImage: file(relativePath: { eq: "images/about-header.jpg" }) {
      ...FullWidthImage
    }
    peteHeather: file(relativePath: { eq: "images/leaders/pete-heather.png" }) {
      ...leaderPicture
    }
    devanne: file(relativePath: { eq: "images/leaders/devanne.jpg" }) {
      ...leaderPicture
    }
    mike: file(relativePath: { eq: "images/leaders/mike.jpg" }) {
      ...leaderPicture
    }
    willis: file(relativePath: { eq: "images/leaders/willis.jpg" }) {
      ...leaderPicture
    }
    summer: file(relativePath: { eq: "images/leaders/summer.jpg" }) {
      ...leaderPicture
    }
  }
`;

export default LeadersPage;
