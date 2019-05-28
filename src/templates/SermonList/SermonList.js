import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import TextHero from '../../components/Heroes/TextHero';
import SermonCard from '../../components/SermonCard';
import Container from '../../components/Container';

import * as Styled from './SermonList.styles';

const SermonListPage = (props) => {
  const { currentPage, numberOfPages } = props.pageContext;
  const {
    heroImage,
    spotifyImage,
    allContentfulSermon: { sermons },
  } = props.data;

  const previousPageUrl =
    currentPage >= 2
      ? currentPage === 2
        ? '/sermons'
        : `/sermons/page-${currentPage - 1}`
      : null;

  const nextPageUrl =
    currentPage !== numberOfPages ? `/sermons/page-${currentPage + 1}` : null;

  const isFirstPage = nextPageUrl && !previousPageUrl;

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
          {currentPage !== 1 && <Text>Page {currentPage}</Text>}
        </Flex>
      </ImageHero>
      <TextHero p={isFirstPage ? '4rem' : '0.5rem'}>
        {isFirstPage && (
          <Flex flexDirection="column" alignItems="center">
            <Heading as="h1" fontSize={[5, 6]} color="black" mb="1rem">
              All of our messages can be found on
            </Heading>
            <Styled.ImageContainer>
              <Styled.Image src={spotifyImage.childImageSharp.fluid.src} />
            </Styled.ImageContainer>
          </Flex>
        )}
        <Flex justifyContent="center" mt={['2rem', '1rem']}>
          <Heading as="h2" fontSize={4} color="black">
            <Styled.Link
              color="primary"
              href="https://open.spotify.com/show/3E5VM0Ji3Rb2Oa55PlCC90?si=usLSeMexRam2vRhs52BR_A"
              target="_blank"
            >
              View our Spotify profile
            </Styled.Link>
          </Heading>
        </Flex>
      </TextHero>
      <Container>
        {sermons.map(({ sermon }, index) => {
          return (
            <SermonCard key={index} data={sermon} currentPath="sermonList" />
          );
        })}
        <Flex justifyContent="center" width={['100%', '50%']} mx="auto">
          {previousPageUrl && (
            <Link to={previousPageUrl}>
              <Heading as="h4" fontSize="2">
                Newer
              </Heading>
            </Link>
          )}
          {previousPageUrl && nextPageUrl && <Box mx="0.5rem" />}
          {nextPageUrl && (
            <Link to={nextPageUrl}>
              <Heading as="h4" fontSize="2">
                Older
              </Heading>
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
