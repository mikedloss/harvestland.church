import React from 'react';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import { graphql } from 'gatsby';

const SermonsPage = (props) => {
  const { image } = props.data;
  console.log(props);
  return (
    <Layout>
      <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        text="Sermons"
        imageSrc={image.childImageSharp.fluid.src}
        height="30vh"  
      />
      <Heading>Sermons Page</Heading>
    </Layout>
  )
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
  }
`;

export default SermonsPage;
