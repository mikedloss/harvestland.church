import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp, LeaderShape, Leader } from '../../../types';
import { getFluidImageSrc } from '../../../queries';

export interface LeadersPageQueryShape {
  heroImage: ChildImageSharp;
  peteHeather: LeaderShape;
  willis: LeaderShape;
}

export interface LeadersPageQuery {
  heroImage: string;
  peteHeather: Leader;
  willis: Leader;
}

export const useLeadersPageQuery = (): LeadersPageQuery => {
  const data = useStaticQuery<LeadersPageQueryShape>(graphql`
    {
      heroImage: file(relativePath: { eq: "images/pages/about/header.jpg" }) {
        ...FullWidthImage
      }
      peteHeather: contentfulLeader(name: { eq: "Pete & Heather Freeman" }) {
        ...LeaderData
      }
      willis: contentfulLeader(name: { eq: "Willis Greer" }) {
        ...LeaderData
      }
    }
  `);

  const heroImage = getFluidImageSrc(data.heroImage);

  const peteHeather = buildLeaderObject(data.peteHeather);
  const willis = buildLeaderObject(data.willis);

  return { heroImage, peteHeather, willis };
};

const buildLeaderObject = (leaderData: LeaderShape): Leader => {
  return {
    ...leaderData,
    picture: {
      title: leaderData.picture.title,
      src: leaderData.picture.fluid.src,
    },
  };
};
