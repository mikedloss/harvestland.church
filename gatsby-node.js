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
            sermons: allContentfulSermon (
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
          }
        `
      ).then(result => {
        if (result.errors) reject(result.errors);
        
        // sermon page creation
        const sermons = result.data.sermons.edges
        sermons.forEach(({ node }) => {
          const sermonPath = `/sermons/${ slugify(node.date, "/") }/${ slugify(node.title) }`;
          
          createPage({
            component: path.resolve('./src/templates/sermon-post.js'),
            path: sermonPath,
            context: {
              id: node.id
            }
          })
        })

        // event page creation
        const events = result.data.events.edges;
        events.forEach(({ node }) => {
          // only use the year and month
          const slugDate = dayjs(node.date).format('YYYY/MM');
          const eventPath = `/events/${ slugDate }/${ slugify(node.eventName) }`
          
          createPage({
            component: path.resolve('./src/templates/event.js'),
            path: eventPath,
            context: {
              id: node.id
            }
          })
        })

        // write the podcast RSS if we're in production
        process.env.NODE_ENV === "production" && podcast.writeRSS(sermons);

        resolve();
      })
    )
  })
}
