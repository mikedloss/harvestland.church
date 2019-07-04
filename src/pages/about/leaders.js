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
            <LeaderInfo who={leaders[leader]} key={leader.name} />
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

  fragment LeaderData on ContentfulLeader {
    name
    email
    jobs
    picture {
      title
      fluid(maxWidth: 1000) {
        src
      }
    }
  }

  {
    heroImage: file(relativePath: { eq: "images/pages/about/header.jpg" }) {
      ...FullWidthImage
    }
    peteHeather: contentfulLeader(name: { eq: "Pete & Heather Freeman" }) {
      ...LeaderData
    }
    devanne: contentfulLeader(name: { eq: "Devanne DLoss" }) {
      ...LeaderData
    }
    mike: contentfulLeader(name: { eq: "Mike DLoss" }) {
      ...LeaderData
    }
    willis: contentfulLeader(name: { eq: "Willis Greer" }) {
      ...LeaderData
    }
    summer: contentfulLeader(name: { eq: "Summer Posey" }) {
      ...LeaderData
    }
  }

`;

export default LeadersPage;
