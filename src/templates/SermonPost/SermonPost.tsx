import React from 'react';
import { Flex, Text, Heading } from 'rebass';
import { Link, graphql } from 'gatsby';

import { Layout, SEO, Hero, SermonCard, Container } from '../../components';

const SermonPostTemplate = (props) => {
  const { heroImage, sermon } = props.data;
  return (
    <Layout>
      <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
      <Hero.Image
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '50vh']}
      >
        <Heading p="1rem" fontSize={[5, 7]}>
          {sermon.title}
        </Heading>
      </Hero.Image>
      <Container>
        <SermonCard data={sermon} currentPath={props['*']} />
        <Flex alignItems="center" justifyContent="center">
          <Link as="a" to="/sermons">
            <Text fontSize={1}>Return to All Sermons</Text>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    heroImage: file(relativePath: { eq: "images/pages/sermons/header.jpg" }) {
      ...FullWidthImage
    }
    sermon: contentfulSermon(id: { eq: $id }) {
      title
      speaker
      date
      videoUrl
      audioUrl
      verses
      audio {
        file {
          url
          fileName
          contentType
        }
      }
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;

export default SermonPostTemplate;
