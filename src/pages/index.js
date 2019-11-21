import React from "react";
import { graphql, Link } from "gatsby";
import { Heading, Flex, Text, Box } from "rebass";

import { Layout, SEO, Hero, Button, Container } from "../components";

import * as Styled from "../page-styles/index-page";
import * as Media from "../components/Elements/media";

// TODO: move these into a more central location, make this more extendable
const SEOKeywords = [
  "harvestland church",
  "harvestland",
  "clarkston, mi",
  "clarkston",
  "michigan",
  "non-denominational",
  "non-denominational church",
  "detroit",
  "detroit, mi"
];

const IndexPage = ({
  data: {
    video,
    fallbackImage,
    whiteLogo,
    worshipImage,
    gatherImage,
    serveImage
  }
}) => {
  const fallbackImageContent = (
    <Styled.ContentBlock>
      <Heading as="h1" fontSize={4}>
        Welcome to
      </Heading>
      <Box mt="1rem">
        <Styled.WhiteLogo />
      </Box>
      <Link to="/visit">
        <Button variant="inverse">Visit us</Button>
      </Link>
    </Styled.ContentBlock>
  );

  return (
    <Layout fullWidth>
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
          <Box mt="1rem">
            <Styled.WhiteLogo />
          </Box>
          {/* <Styled.WhiteLogo
            src={whiteLogo.childImageSharp.fluid.src}
            alt="Harvestland Church"
            m="1rem"
          /> */}
        </Styled.ContentBlock>
      </Hero.Video>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        bg="primary"
        p="0.5rem"
      >
        <Flex flexDirection="column" alignItems="center" mr={[null, "2rem"]}>
          <Styled.HoursText fontSize={3} color="white">
            Sundays at 10 AM
          </Styled.HoursText>
          <Styled.HoursText fontSize={3} color="white">
            Wednesdays at 7 PM
          </Styled.HoursText>
        </Flex>
        <Media.NotSmall>
          <Flex>
            <Link to="/visit">
              <Button variant="inverse">Visit Us</Button>
            </Link>
          </Flex>
        </Media.NotSmall>
      </Flex>
      <Container>
        <Hero.Text p={["1rem", "4rem"]}>
          <Flex flexDirection="column" alignItems="center" my="2rem">
            <Heading>
              Practicing the ways of{" "}
              <Text as="span" color="primary">
                Jesus
              </Text>{" "}
              on Earth as it is in Heaven.
            </Heading>
            <Heading mt="0.5rem">
              We accept{" "}
              <Text as="span" color="primary">
                you
              </Text>
              , no matter what.
            </Heading>
          </Flex>
        </Hero.Text>
        <Box>
          <Hero.Side2Side
            imageSrc={worshipImage.childImageSharp.fluid.src}
            height="40vh"
            imageWidth="60%"
            opacity="1"
          >
            <Box my="1rem">
              <Heading color="primary">To Worship</Heading>
              <Text>
                We worship God every week by how we live, how we act, and how we
                treat others. We spend time together each week learning about
                Him, His teachings, and praising Him for all that He's done in
                our lives.
              </Text>
              <Link to="/visit">
                <Heading as="h4" fontSize={3} color="primary" mt="1rem">
                  Join us for our next service <Styled.Chevron />
                </Heading>
              </Link>
            </Box>
          </Hero.Side2Side>
          <Hero.Side2Side
            imageSrc={gatherImage.childImageSharp.fluid.src}
            height="40vh"
            opacity="1"
            imageWidth="60%"
            inverse
          >
            <Box my="1rem">
              <Heading color="primary">To Gather</Heading>
              <Text>
                We were made for relationship, so we prioritize gathering,
                discipling, and encourage one another. We weren't made to live
                isolated from one another.
              </Text>
              <Link to="/groups">
                <Heading as="h4" fontSize={3} color="primary" mt="1rem">
                  See our groups <Styled.Chevron />
                </Heading>
              </Link>
            </Box>
          </Hero.Side2Side>
          <Hero.Side2Side
            imageSrc={serveImage.childImageSharp.fluid.src}
            height="40vh"
            imageWidth="60%"
            opacity="1"
          >
            <Box my="1rem">
              <Heading color="primary">To Serve</Heading>
              <Text>
                We extend God's grace, mercy, and love to others for His glory
                alone, through humility, generosity, and hospitality.
              </Text>
              <Link to="/give">
                <Heading as="h4" fontSize={3} color="primary" mt="1rem">
                  Give online <Styled.Chevron />
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
    video: file(relativePath: { eq: "videos/homepage-v1.mp4" }) {
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
        fluid(quality: 100) {
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
