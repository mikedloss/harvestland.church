import React from 'react';
import { Flex, Text, Heading } from 'rebass';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ImageHero from '../components/Heroes/ImageHero';
import SermonCard from '../components/SermonCard';

import { ContentContainer as Container } from '../components/Layout/Layout.styles';

const SermonPostTemplate = (props) => {
  const { event } = props.data;
  console.log(props);
  return (
    <Layout>
      <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
      {/* <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['30vh', '50vh']}
      >
        <Heading p="1rem" fontSize={[5, 7]}>
          {sermon.title}
        </Heading>
      </ImageHero> */}
      <Container>
        <Heading>hello world</Heading>
        {/* <SermonCard data={sermon} currentPath={props['*']} />
        <Flex alignItems="center" justifyContent="center">
          <Link to="/sermons">
            <Text fontSize={1}>Return to All Sermons</Text>
          </Link>
        </Flex> */}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    event: contentfulEvent(id: { eq: $id }) {
      eventName
      date
      eventAddress {
        childMarkdownRemark {
          html
        }
      }
      eventImage {
        title
        fluid(maxWidth: 1600) {
          src
        }
      }
      eventDescription {
        childMarkdownRemark {
          html
        }
      }
      isFrontPage
      facebookEventLink
      ticketLink
    }
  }
`;

export default SermonPostTemplate;
