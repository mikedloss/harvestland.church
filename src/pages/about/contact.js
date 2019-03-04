import React from 'react';
import { graphql } from 'gatsby';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';

const ContactPage = (props) => {
  const { heroImage } = props.data;
  return (
    <Layout>
      <SEO title="Beliefs" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        text="Contact"
        height="30vh"
      />
      <Heading>Contact Page</Heading>
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

export default ContactPage;
