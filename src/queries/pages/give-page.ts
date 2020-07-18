import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp } from '../../types';
import { getFluidImageSrc } from '../../queries';

export interface GivePageQueryShape {
  image: ChildImageSharp;
}

export interface GivePageQuery {
  image: string;
}

export const useGivePageQuery = (): GivePageQuery => {
  const data = useStaticQuery<GivePageQueryShape>(graphql`
    {
      image: file(relativePath: { eq: "images/pages/give/header.jpg" }) {
        ...FullWidthImage
      }
    }
  `);

  const image = getFluidImageSrc(data.image);

  return { image };
};
