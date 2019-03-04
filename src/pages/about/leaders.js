import React from 'react';
import { graphql } from 'gatsby';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';

const LeadersPage = (props) => {
  const { heroImage } = props.data;
  return (
    <Layout>
      <SEO title="Leaders" keywords={[`gatsby`, `application`, `react`]} />

      <Heading>Leaders Page</Heading>
    </Layout>
  );
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/about-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default LeadersPage;