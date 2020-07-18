export interface LinkRoute {
  label: string;
  route: string;
  dropdown?: boolean;
  dropdownContent?: LinkRoute[];
}

export const links: LinkRoute[] = [
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Groups',
    route: '/groups',
  },
  {
    label: 'Sermons',
    route: '/sermons',
  },
  // {
  //   label: "Events",
  //   route: "/events"
  // },
  {
    label: 'Visit',
    route: '/visit',
  },
  {
    label: 'Give',
    route: '/give',
  },
];
