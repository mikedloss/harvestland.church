import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import VideoHero from '../components/Heroes/VideoHero';

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

const IndexPage = (props) => {
  const { video, image } = props.data;
  return (
    <Layout fullWidth>
      <SEO
        title="Welcome"
        description="Harvestland Church exists to win people to Jesus, build a community of believers, and to equip those people to do God's work."
        keywords={SEOKeywords}
      />
      <VideoHero
        videoSrc={video.publicURL}
        imageSrc={image.childImageSharp.fluid.src}
        imageHeight="80vh"
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
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

  {
    video: file(relativePath: { eq: "videos/front.mp4" }) {
      publicURL
    }
    image: file(relativePath: { eq: "images/visit-header.png" }) {
      ...SmallImage
    }
  }
`;

export default IndexPage;
