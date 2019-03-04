import React from 'react';
import { Heading } from 'rebass';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import SermonCard from '../../components/SermonCard';

import * as LayoutStyle from '../../components/Layout/Layout.styles';

const SermonsPage = (props) => {
  const { image, sermons } = props.data;
  return (
    <Layout>
      <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        text="Sermons"
        imageSrc={image.childImageSharp.fluid.src}
        height={['50vh', '30vh']}
      />
      <LayoutStyle.ContentContainer>
        {sermons.edges.map((sermon, index) => {
          return <SermonCard key={index} data={sermon.node} />;
        })}
      </LayoutStyle.ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  {
    image: file(relativePath: { eq: "images/sermons-header.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sermons: allContentfulSermon(
      limit: 5
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
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

export default SermonsPage;
