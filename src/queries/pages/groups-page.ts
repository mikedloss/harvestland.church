import { useStaticQuery, graphql } from 'gatsby';

import { ChildImageSharp } from '../../types';
import { getFluidImageSrc } from '../../queries';

export interface Group
  extends Pick<GroupData, 'id' | 'groupName' | 'groupFrequency'> {
  groupDescription: string;
  groupImage: {
    title: string;
    src: string;
  };
}

export interface GroupData {
  id: string;
  groupName: string;
  groupFrequency: string;
  groupDescription: {
    groupDescription: string;
  };
  groupImage: {
    title: string;
    fluid: {
      src: string;
    };
  };
}

export interface GroupsPageQueryShape {
  heroImage: ChildImageSharp;
  groups: {
    edges: {
      node: GroupData;
    }[];
  };
}

export interface GroupsPageQuery {
  heroImage: string;
  groups: Group[];
}

export const useGroupsPageQuery = (): GroupsPageQuery => {
  const data = useStaticQuery<GroupsPageQueryShape>(graphql`
    {
      heroImage: file(relativePath: { eq: "images/pages/groups/header.jpg" }) {
        ...FullWidthImage
      }
      groups: allContentfulGroup(sort: { fields: [groupName], order: ASC }) {
        edges {
          node {
            id
            groupName
            groupFrequency
            groupDescription {
              groupDescription
            }
            groupImage {
              title
              fluid(maxWidth: 1600) {
                src
              }
            }
          }
        }
      }
    }
  `);

  const heroImage = getFluidImageSrc(data.heroImage);

  const groupsData = data.groups.edges.map((group) => ({ ...group.node }));
  const groups: Group[] = groupsData.map((group) => ({
    ...group,
    groupDescription: group.groupDescription.groupDescription,
    groupImage: {
      title: group.groupImage.title,
      src: group.groupImage.fluid.src,
    },
  }));

  return { heroImage, groups };
};
