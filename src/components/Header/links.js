export const links = [
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Groups',
    dropdown: true,
    dropdownContent: [
      {
        label: 'Build Groups',
        route: '/groups',
      },
      {
        label: 'Children',
        route: '/groups/children',
      },
    ],
  },
  {
    label: 'Sermons',
    route: '/sermons',
  },
  {
    label: 'Events',
    route: '/events',
  },
  {
    label: 'Visit',
    route: '/visit',
  },
  {
    label: 'Give',
    route: '/give',
  },
];
