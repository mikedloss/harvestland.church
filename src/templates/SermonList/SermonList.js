import React from 'react';
import { Heading, Text, Flex, Link as RebassLink } from 'rebass';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import TextHero from '../../components/Heroes/TextHero';
import SermonCard from '../../components/SermonCard';

import { ContentContainer as Container } from '../../components/Layout/Layout.styles';
import * as Styled from './SermonList.styles';

const SermonListPage = (props) => {
  const { currentPage, numberOfPages } = props.pageContext;
  const { heroImage, spotifyImage, allContentfulSermon: { sermons } } = props.data;

  const previousPageUrl = currentPage >= 2 ? 
    currentPage === 2
    ? '/sermons'
    : `/sermons/page-${currentPage - 1}`
  : null;

  const nextPageUrl = currentPage !== numberOfPages
    ? `/sermons/page-${currentPage + 1}`
    : null;
  
  return (
    <Layout>
      <SEO
        title="Sermons"
        keywords={[
          'harvestland pastor',
          'pete freeman',
          'harvestland sermons',
          'sermons',
        ]}
      />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        height={['40vh', '50vh']}
      >
        <Flex flexDirection="column" alignItems="center">
          <Heading p="1rem" fontSize={[6, 7]}>
            All Sermons
          </Heading>
          { currentPage !== 1 && (
            <Text>Page { currentPage }</Text>
          ) }
        </Flex>
      </ImageHero>
      <TextHero>
        <Flex flexDirection={["column", "row"]} alignItems="center">
          <Heading as="h1" fontSize={[5, 6]} color="black" mr={[null, "1rem"]} mb={["0.5rem", null]}>
            All of our messages can be found on
          </Heading>
          <Styled.ImageContainer>
            <Styled.Image src={spotifyImage.childImageSharp.fluid.src} />
          </Styled.ImageContainer>
        </Flex>
        <Flex justifyContent="center" mt={["2rem", "1rem"]}>
          <Heading as="h2" fontSize={4} color="black">
            <Styled.Link color="primary" href="https://open.spotify.com/show/3E5VM0Ji3Rb2Oa55PlCC90?si=usLSeMexRam2vRhs52BR_A" target="_blank">
              View our Spotify profile
            </Styled.Link>
          </Heading>
        </Flex>
      </TextHero>
      <Container>
        { sermons.map(({ sermon }, index) => {
          return (
            <SermonCard
              key={index}
              data={sermon}
              currentPath="sermonList"
            />
          )
        }) }
        <Flex justifyContent="space-between" width={["100%", "50%"]} mx="auto">
          { previousPageUrl && (
            <Link to={previousPageUrl}>
              <Text>{'<< '}Newer</Text>
            </Link>
          )}
          { nextPageUrl && (
            <Link to={nextPageUrl}>
              <Text>Older{' >>'}</Text>
            </Link>
          )}
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query SermonListQuery($skip: Int!, $limit: Int!) {
    heroImage: file(relativePath: { eq: "images/sermons-header.jpg" }) {
      ...FullWidthImage
    }
    spotifyImage: file(relativePath: { eq: "images/spotify-logo.png" }) {
      ...FullWidthImage
    }

    allContentfulSermon(
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      sermons: edges {
        sermon: node {
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
    }
  }
`;

export default SermonListPage;
