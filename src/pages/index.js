import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import VideoHero from '../components/Heroes/VideoHero';

const IndexPage = (props) => {
  const { video, image } = props.data;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
  {
    video: file(relativePath: { eq: "videos/front.mp4" }) {
      publicURL
    }
    image: file(relativePath: { eq: "images/tall.png" }) {
      childImageSharp {
        fluid(maxWidth: 810) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
