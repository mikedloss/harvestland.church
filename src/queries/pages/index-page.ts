import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp } from '../../types';

export interface IndexPageQueryShape {
  video: {
    publicURL: string;
  };
  fallbackImage: ChildImageSharp;
  whiteLogo: ChildImageSharp;
  worshipImage: ChildImageSharp;
  gatherImage: ChildImageSharp;
  serveImage: ChildImageSharp;
}

export const useIndexPageQuery = (): IndexPageQueryShape => {
  const data = useStaticQuery(graphql`
    {
      video: file(relativePath: { eq: "videos/homepage-v1.mp4" }) {
        publicURL
      }
      fallbackImage: file(
        relativePath: { eq: "images/pages/visit/header.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteLogo: file(relativePath: { eq: "images/logo-white.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      worshipImage: file(
        relativePath: { eq: "images/pages/index/worship.jpg" }
      ) {
        ...MaxImageSize
      }
      gatherImage: file(relativePath: { eq: "images/pages/index/gather.jpg" }) {
        ...MaxImageSize
      }
      serveImage: file(relativePath: { eq: "images/pages/index/serve.jpg" }) {
        ...MaxImageSize
      }
    }
  `);

  console.log(`data`, data);

  return data;
};
