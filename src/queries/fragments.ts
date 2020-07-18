import { graphql } from 'gatsby';

export const fullWidthImage = graphql`
  fragment FullWidthImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const smallImage = graphql`
  fragment SmallImage on File {
    childImageSharp {
      fluid(maxWidth: 810, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const maxImageSize = graphql`
  fragment MaxImageSize on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
