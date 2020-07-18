import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp } from '../../types';
import { getFluidImageSrc } from '../../queries';

export interface AboutPageQueryShape {
  heroImage: ChildImageSharp;
  campfireImage: ChildImageSharp;
}

export interface AboutPageQuery {
  heroImage: string;
  campfireImage: string;
}

export const useAboutPageQuery = (): AboutPageQuery => {
  const data = useStaticQuery<AboutPageQueryShape>(graphql`
    {
      heroImage: file(relativePath: { eq: "images/pages/about/header2.jpg" }) {
        ...FullWidthImage
      }
      campfireImage: file(relativePath: { eq: "images/common/campfire2.jpg" }) {
        ...FullWidthImage
      }
    }
  `);

  const heroImage = getFluidImageSrc(data.heroImage);
  const campfireImage = getFluidImageSrc(data.campfireImage);

  return { heroImage, campfireImage };
};
