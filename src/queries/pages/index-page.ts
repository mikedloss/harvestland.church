import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp } from '../../types';
import { getFluidImageSrc } from '../../queries';

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

export interface IndexPageQuery {
  videoUrl: string;
  fallbackImage: string;
  whiteLogo: string;
  worshipImage: string;
  gatherImage: string;
  serveImage: string;
}

export const useIndexPageQuery = (): IndexPageQuery => {
  const data = useStaticQuery<IndexPageQueryShape>(graphql`
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

  const videoUrl = data.video.publicURL;
  const fallbackImage = getFluidImageSrc(data.fallbackImage);
  const whiteLogo = getFluidImageSrc(data.whiteLogo);
  const worshipImage = getFluidImageSrc(data.worshipImage);
  const gatherImage = getFluidImageSrc(data.gatherImage);
  const serveImage = getFluidImageSrc(data.serveImage);

  return {
    videoUrl,
    fallbackImage,
    whiteLogo,
    worshipImage,
    gatherImage,
    serveImage,
  };
};
