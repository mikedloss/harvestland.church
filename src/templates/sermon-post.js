import React from 'react';
import { Flex, Text } from 'rebass';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ImageHero from '../components/Heroes/ImageHero';
import SermonCard from '../components/SermonCard';

import { ContentContainer as Container } from '../components/Layout/Layout.styles';

const SermonPostTemplate = (props) => {
  const { image, sermon } = props.data;
  return (
    <Layout>
      <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        text={sermon.title}
        imageSrc={image.childImageSharp.fluid.src}
        height={['50vh', '30vh']}
      />
      <Container>
        <SermonCard data={sermon} currentPath={props['*']} />
        <Flex alignItems="center" justifyContent="center">
          <Link to="/sermons">
            <Text fontSize={1}>Return to All Sermons</Text>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    image: file(relativePath: { eq: "images/sermons-header.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
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
