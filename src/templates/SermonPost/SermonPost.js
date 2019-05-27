import React from 'react';
import { Flex, Text, Heading } from 'rebass';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import SermonCard from '../../components/SermonCard';

import { ContentContainer as Container } from '../../components/Layout/Layout.styles';

const SermonPostTemplate = (props) => {
  const { heroImage, sermon } = props.data;
  return (
    <Layout>
      <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '50vh']}
      >
        <Heading p="1rem" fontSize={[5, 7]}>
          {sermon.title}
        </Heading>
      </ImageHero>
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
    heroImage: file(relativePath: { eq: "images/sermons-header.jpg" }) {
      ...FullWidthImage
    }
    sermon: contentfulSermon(id: { eq: $id }) {
      title
      speaker
      date
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
