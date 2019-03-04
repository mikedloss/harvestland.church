module.exports = {
  siteMetadata: {
    title: `Harvestland Church`,
    author: `Mike DLoss`,
    siteUrl: 'https://harvestland.church'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harvestland Church`,
        short_name: `Harvestland`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#42613d`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'm1p6j93uez0z',
        accessToken: '40259e806b95801510b8c4a6cb2f693166aefa63876553fba5a2753b73901156'
      }
    },
    '@contentful/gatsby-transformer-contentful-richtext',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
