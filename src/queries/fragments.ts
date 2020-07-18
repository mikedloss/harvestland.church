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

export const LeaderPicture = graphql`
  fragment leaderPicture on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const LeaderData = graphql`
  fragment LeaderData on ContentfulLeader {
    name
    email
    jobs
    picture {
      title
      fluid(maxWidth: 1000) {
        src
      }
    }
  }
`;
