/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const slugify = require('./scripts/slugify');
const podcast = require('./scripts/podcast-rss');
const dayjs = require('dayjs');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            sermons: allContentfulSermon(
              sort: { fields: [date], order: DESC }
            ) {
              edges {
                node {
                  id
                  title
                  speaker
                  date
                  audio {
                    file {
                      url
                      fileName
                      contentType
                    }
                  }
                  audioUrl
                  videoUrl
                  duration
                  verses
                  description {
                    childContentfulRichText {
                      html
                    }
                  }
                }
              }
            }

            events: allContentfulEvent {
              edges {
                node {
                  id
                  eventName
                  date
                }
              }
            }

            alerts: allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(async (result) => {
        if (result.errors) reject(result.errors);

        // sermon stuff
        const sermons = result.data.sermons.edges;
        const sermonsPerPage = 10;
        const numberOfPages = Math.ceil(sermons.length / sermonsPerPage);

        // sermon list pages
        Array.from({ length: numberOfPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/sermons' : `/sermons/page-${i + 1}`,
            component: path.resolve(
              './src/templates/SermonList/SermonList.tsx'
            ),
            context: {
              limit: sermonsPerPage,
              skip: i * sermonsPerPage,
              numberOfPages,
              currentPage: i + 1,
            },
          });
        });

        // sermon specific pages
        sermons.forEach(({ node }) => {
          const sermonPath = `/sermons/${slugify(node.date, '/')}/${slugify(
            node.title
          )}`;

          createPage({
            component: path.resolve(
              './src/templates/SermonPost/SermonPost.tsx'
            ),
            path: sermonPath,
            context: {
              id: node.id,
            },
          });
        });

        // event page creation
        const events = result.data.events.edges;
        events.forEach(({ node }) => {
          // only use the year and month
          const slugDate = dayjs(node.date).format('YYYY/MM');
          const eventPath = `/events/${slugDate}/${slugify(node.eventName)}`;

          createPage({
            component: path.resolve('./src/templates/event.tsx'),
            path: eventPath,
            context: {
              id: node.id,
            },
          });
        });

        // write the podcast RSS if we're in production
        if (!process.env.USE_RSS_PLUGIN) {
          console.log('!!! Writing XML for Podcasts... !!!');
          process.env.NODE_ENV === 'production' &&
            (await podcast.writeRSS(sermons));
          console.log(
            '!!! Finished writing XML for Podcasts, find at /rss.xml !!!'
          );
        }

        // alert md files
        const alerts = result.data.alerts.edges;
        alerts.forEach(({ node }) => {
          if (node.frontmatter.path) {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve('./src/templates/alert.tsx'),
              context: {},
            });
          }
        });

        resolve();
      })
    );
  });
};
