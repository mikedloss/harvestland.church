require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Harvestland Church`,
    author: `Mike DLoss`,
    siteUrl: 'https://harvestland.church',
    description: "Harvestland Church exists to win people to Jesus, build a community of believers, and to equip those people to do God's work."
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
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harvestland Church`,
        short_name: `Harvestland`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#42613d`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicons/favicon1024.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${ process.env.CONTENTFUL_SPACE_ID }`,
        accessToken: `${ process.env.CONTENTFUL_DELIVERY_TOKEN }`,
      }
    },
    '@contentful/gatsby-transformer-contentful-richtext',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
