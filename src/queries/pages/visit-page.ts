import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp } from '../../types';
import { getFluidImageSrc } from '../../queries';

export interface VisitPageQueryShape {
  heroImage: ChildImageSharp;
}

export interface VisitPageQuery {
  heroImage: string;
}

export const useVisitPageQuery = (): VisitPageQuery => {
  const data = useStaticQuery<VisitPageQueryShape>(graphql`
    {
      heroImage: file(relativePath: { eq: "images/pages/visit/header.png" }) {
        ...FullWidthImage
      }
    }
  `);

  const heroImage = getFluidImageSrc(data.heroImage);

  return { heroImage };
};
