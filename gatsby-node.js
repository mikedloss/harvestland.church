/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

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
                  audioUrl
                  verses
                  audio {
                    file {
                      url
                      fileName
                      contentType
                    }
                  }
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

        result.data.allContentfulSermon.edges.forEach(({ node }) => {
          createPage({
            component: path.resolve('./src/templates/sermon-post.js'),
            path: `/sermons/${ slugify(node.date, "/") }/${ slugify(node.title) }`,
            context: {
              id: node.id
            }
          })
        })

        resolve();
      })
    )
  })
}

const slugify = (text, separator) => {
  text = text.toString().toLowerCase().trim();

  const sets = [
      {to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]'},
      {to: 'c', from: '[ÇĆĈČ]'},
      {to: 'd', from: '[ÐĎĐÞ]'},
      {to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]'},
      {to: 'g', from: '[ĜĞĢǴ]'},
      {to: 'h', from: '[ĤḦ]'},
      {to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]'},
      {to: 'j', from: '[Ĵ]'},
      {to: 'ij', from: '[Ĳ]'},
      {to: 'k', from: '[Ķ]'},
      {to: 'l', from: '[ĹĻĽŁ]'},
      {to: 'm', from: '[Ḿ]'},
      {to: 'n', from: '[ÑŃŅŇ]'},
      {to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]'},
      {to: 'oe', from: '[Œ]'},
      {to: 'p', from: '[ṕ]'},
      {to: 'r', from: '[ŔŖŘ]'},
      {to: 's', from: '[ßŚŜŞŠ]'},
      {to: 't', from: '[ŢŤ]'},
      {to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]'},
      {to: 'w', from: '[ẂŴẀẄ]'},
      {to: 'x', from: '[ẍ]'},
      {to: 'y', from: '[ÝŶŸỲỴỶỸ]'},
      {to: 'z', from: '[ŹŻŽ]'},
      {to: '-', from: '[·/_,:;\']'}
  ];

  sets.forEach(set => {
      text = text.replace(new RegExp(set.from,'gi'), set.to);
  });

  text = text.toString().toLowerCase()
      .replace(/\s+/g, '-')         // Replace spaces with -
      .replace(/&/g, '-and-')       // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\--+/g, '-')        // Replace multiple - with single -
      .replace(/^-+/, '')           // Trim - from start of text
      .replace(/-+$/, '');          // Trim - from end of text

  if ((typeof separator !== 'undefined') && (separator !== '-')) {
      text = text.replace(/-/g, separator);
  }

  return text;
}