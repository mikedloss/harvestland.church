import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp } from '../../../types';
import { getFluidImageSrc } from '../../../queries';

export interface BeliefsPageQueryShape {
  heroImage: ChildImageSharp;
}

export interface BeliefsPageQuery {
  heroImage: string;
}

export const useBeliefsPageQuery = (): BeliefsPageQuery => {
  const data = useStaticQuery<BeliefsPageQueryShape>(graphql`
    {
      heroImage: file(relativePath: { eq: "images/pages/about/header.jpg" }) {
        ...FullWidthImage
      }
    }
  `);

  const heroImage = getFluidImageSrc(data.heroImage);

  return { heroImage };
};
