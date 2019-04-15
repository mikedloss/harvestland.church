import React from 'react';
import { Heading, Text, Flex } from 'rebass';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ImageHero from '../components/Heroes/ImageHero';
import SermonCard from '../components/SermonCard';

import { ContentContainer as Container } from '../components/Layout/Layout.styles';

const SermonListPage = (props) => {
  const { currentPage, numberOfPages } = props.pageContext;
  const { heroImage, allContentfulSermon: { sermons } } = props.data;

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
