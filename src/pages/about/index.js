import React from 'react';
import { Link, graphql } from 'gatsby';
import { Heading, Text } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';
import { ContentContainer as Container } from '../../components/Layout/Layout.styles';

const AboutPage = (props) => {
  const { heroImage } = props.data;
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <ImageHero
        imageSrc={heroImage.childImageSharp.fluid.src}
        text="About Us"
        height="30vh"
      />
      <Container>
        <Heading>About Page</Heading>
        <Link to="/about/beliefs">
          <Text>Beliefs</Text>
        </Link>
        <Link to="/about/leaders">
          <Text>Leaders</Text>
        </Link>
        <Link to="/about/contact">
          <Text>Contact</Text>
        </Link>
      </Container>
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

export default AboutPage;
