import React from 'react';
import { graphql, Link } from 'gatsby';
import { Heading, Flex, Text, Box } from 'rebass';

import { Layout, SEO, Hero, Button, Container } from '../components';

import * as Styled from '../page-styles/index-page';

// TODO: move these into a more central location, make this more extendable
const SEOKeywords = [
  'harvestland church',
  'harvestland',
  'clarkston, mi',
  'clarkston',
  'michigan',
  'non-denominational',
  'non-denominational church',
  'detroit',
  'detroit, mi',
];

const IndexPage = ({
  data: {
    video,
    fallbackImage,
    whiteLogo,
    worshipImage,
    gatherImage,
    serveImage,
  },
}) => {
  const fallbackImageContent = (
    <Styled.ContentBlock>
      <Heading as="h1" fontSize={4}>
        Welcome to
        <br />
        <Styled.WhiteLogo
          src={whiteLogo.childImageSharp.fluid.src}
          alt="Harvestland Church"
          m="1rem"
        />
      </Heading>
      <Text as="small" fontSize="3">
        Sundays at 10 AM
      </Text>
      <Text as="small" fontSize="3">
        Wednesdays at 7 PM
      </Text>
      <Link to="/visit">
        <Button mt="2rem">Visit us</Button>
      </Link>
    </Styled.ContentBlock>
  );

  return (
    <Layout fullWidth hideLogo>
      <SEO
        title="Welcome"
        description="Harvestland Church exists to win people to Jesus, build a community of believers, and to equip those people to do God's work."
        keywords={SEOKeywords}
      />
      <Hero.Video
        videoSrc={video.publicURL}
        fallbackImageSrc={fallbackImage.childImageSharp.fluid.src}
        fallbackImageHeight="60vh"
        fallbackImageContent={fallbackImageContent}
      >
        <Styled.ContentBlock>
          <Heading as="h1" fontSize={4}>
            Welcome to
          </Heading>
          <Styled.WhiteLogo
            src={whiteLogo.childImageSharp.fluid.src}
            alt="Harvestland Church"
            m="1rem"
          />
          <Text as="small" fontSize={3}>
            Sundays at 10 AM
          </Text>
          <Text as="small" fontSize={3}>
            Wednesdays at 7 PM
          </Text>
        </Styled.ContentBlock>
      </Hero.Video>
      <Container>
        <Hero.Text p="4rem">
          <Flex alignItems="center" my="2rem">
            <Heading>
              Practicing the ways of{' '}
              <Text as="span" color="primary">
                Jesus
              </Text>{' '}
              on Earth as it is in Heaven.
            </Heading>
          </Flex>
        </Hero.Text>
        <Box>
          <Hero.Side2Side
            imageSrc={worshipImage.childImageSharp.fluid.src}
            height="40vh"
          >
            <Box my="1rem">
              <Heading color="primary">Worship</Heading>
              <Text>
                We worship God every week by how we live, how we act, and how we
                treat others. We spend time together each week learning about
                Him, His teachings, and praising Him for all that He's done in
                our lives.
              </Text>
              <Link to="/visit">
                <Heading as="h4" fontSize={3} color="primary" mt="1rem">
                  Join us for our next service{' '}
                  <Styled.Chevron width="20px" color="primary" />
                </Heading>
              </Link>
            </Box>
          </Hero.Side2Side>
          <Hero.Side2Side
            imageSrc={gatherImage.childImageSharp.fluid.src}
            height="40vh"
            inverse
          >
            <Box my="1rem">
              <Heading color="primary">Gather</Heading>
              <Text>
                We were made for relationship, so we prioritize gathering,
                discipling, and encourage one another. We weren't made to live
                in isolation.
              </Text>
              <Link to="/groups">
                <Heading as="h4" fontSize={3} color="primary" mt="1rem">
                  See our groups <Styled.Chevron width="20px" color="primary" />
                </Heading>
              </Link>
            </Box>
          </Hero.Side2Side>
          <Hero.Side2Side
            imageSrc={serveImage.childImageSharp.fluid.src}
            height="40vh"
          >
            <Box my="1rem">
              <Heading color="primary">Serve</Heading>
              <Text>
                We extend God's grace, mercy, and love to others for His glory
                alone, through humility, generosity, and hospitality
              </Text>
              <Link to="/events">
                <Heading as="h4" fontSize={3} color="primary" mt="1rem">
                  See our events <Styled.Chevron width="20px" color="primary" />
                </Heading>
              </Link>
              <Link to="/give">
                <Heading as="h4" fontSize={3} color="primary" mt="1rem">
                  Give online <Styled.Chevron width="20px" color="primary" />
                </Heading>
              </Link>
            </Box>
          </Hero.Side2Side>
        </Box>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  fragment FullWidthImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment SmallImage on File {
    childImageSharp {
      fluid(maxWidth: 810, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment MaxImageSize on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  {
    video: file(relativePath: { eq: "videos/front.mp4" }) {
      publicURL
    }
    fallbackImage: file(relativePath: { eq: "images/pages/visit/header.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whiteLogo: file(relativePath: { eq: "images/logo-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    worshipImage: file(relativePath: { eq: "images/pages/index/worship.jpg" }) {
      ...MaxImageSize
    }
    gatherImage: file(relativePath: { eq: "images/pages/index/gather.jpg" }) {
      ...MaxImageSize
    }
    serveImage: file(relativePath: { eq: "images/pages/index/serve.jpg" }) {
      ...MaxImageSize
    }
  }

`;

export default IndexPage;
