import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Flex } from 'rebass';

import { Layout, SEO, Hero, LeaderInfo, Container } from '../../components';

const LeadersPage = ({ data: { heroImage, ...leaders } }) => {
  return (
    <Layout>
      <SEO
        title="Leaders"
        keywords={['harvestland church leaders', 'leaders']}
      />
      <Hero.Image
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['40vh', '50vh']}
      >
        <Heading p="20px" fontSize={[5, 6]}>
          Our Leaders
        </Heading>
      </Hero.Image>
      <Container>
        <Flex flexDirection="column" alignItems="center">
          {Object.keys(leaders).map((leader) => (
            <LeaderInfo who={leader} imageSrc={leaders[leader]} key={leader} />
          ))}
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
    heroImage: file(relativePath: { eq: "images/pages/about/header.jpg" }) {
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
