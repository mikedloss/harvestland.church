/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const fs = require('fs');
const slugify = require('./scripts/slugify');
const podcast = require('./scripts/podcast-rss');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulSermon(
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
          }
        `
      ).then(result => {
        if (result.errors) reject(result.errors);

        // console.log("beginning XML")
        // podcast.beginningXML();
        
        const sermons = result.data.allContentfulSermon.edges
        // create sermon pages
        sermons.forEach(({ node }) => {
          const sermonPath = `/sermons/${ slugify(node.date, "/") }/${ slugify(node.title) }`;
          
          // console.log("sermon XML 1")
          // podcast.writeSermonXML(node, sermonPath);
          // console.log("sermon XML 2")
          
          createPage({
            component: path.resolve('./src/templates/sermon-post.js'),
            path: sermonPath,
            context: {
              id: node.id
            }
          })
          // console.log("sermon XML 3")
        })
          
        // console.log("end XML")
        // podcast.endXML();

        podcast.writeRSS(sermons)

        resolve();
      })
    )
  })
}
