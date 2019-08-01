const slugify = require('./slugify');

const buildSermonPath = (sermon) => `sermons/${ slugify(sermon.date, '/') }/${ slugify(sermon.title) }`;

const buildRSSPluginOptions = () => (
  {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
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
        }
        `,
        setup: () => ({
          title: 'Harvestland Church',
          description: 'Thanks for joining us this week at Harvestland Church! Make sure to check back for more inspirational messages from our Pastor Pete Freeman and other guests. Visit our website at http://harvestland.church to find out more or to visit us in person.',
          language: 'en-US',
          link: 'https://www.harvestland.church',
          generator: 'sillyboy',
          categories: ['Religion & Spirituality', 'Christianity'],
          copyright: `${ new Date().getFullYear() } Harvestland Church`,
          custom_namespaces: {
            itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
          },
          custom_elements: [
            { 'itunes:author': 'Harvestland Church' },
            { 'itunes:subtitle': 'Clarkston, MI', },
            { 'itunes:summary': 'Thanks for joining us this week at Harvestland Church! Make sure to check back for more inspirational messages from our Pastor Pete Freeman and other guests. Visit our website at http://harvestland.church to find out more or to visit us in person.'},
            { 'itunes:explicit': 'no' },
            { 'itunes:owner': [
              { 'itunes:name': 'Mike DLoss' },
              { 'itunes:email': 'mike@harvestland.church' },
            ]},
            { 'itunes:category': [
              {_attr: {
                text: 'Religion &amp; Spirituality'
              }},
              { 'itunes:category': {
                _attr: {
                  text: 'Christianity'
                }
              }}
            ]},
            { 'itunes:type': 'episodic' },
            { 'itunes:image': {
              _attr: {
                href: 'http://images.ctfassets.net/m1p6j93uez0z/76ZAUPkA49dUK0lCTZJGru/7ef8149009c2c5c1f8447048855f2900/podcast-icon.png'
              }
            }},
            { 'atom:link': [
              { _attr: { href: 'https://www.harvestland.church/rss.xml' } },
              { _attr: { rel: 'self '} },
              { _attr: { type: 'application/rss+xml' } },
            ]}
          ],
        }),
        feeds: [
          {
            serialize: ({ query: { sermons } } ) => {
              return sermons.edges.map(({ node: sermon }) => {
                console.log(sermon.title);
                const audioURL = `https:${ sermon.audio ? sermon.audio.file.url : sermon.audioURL }`;
                return Object.assign({}, {
                  title: sermon.title,
                  description: sermon.verses ? sermon.verses : ``,
                  guid: sermon.id,
                  date: new Date(sermon.date).toGMTString(),
                  custom_elements: [
                    { pubDate: new Date(sermon.date).toGMTString(), },
                    { link: `https://www.harvestland.church/${ buildSermonPath(sermon) }`, },
                    { 'dc:creator': 'Mike DLoss', },
                    { 'itunes:author': sermon.speaker, },
                    { 'itunes:explicit': 'clean', },
                    { 'itunes:duration': sermon.duration, },
                    { 'itunes:image': 'http://images.ctfassets.net/m1p6j93uez0z/76ZAUPkA49dUK0lCTZJGru/7ef8149009c2c5c1f8447048855f2900/podcast-icon.png', },
                    { 'itunes:title': sermon.title, },
                    { 'media:content': [
                      { _attr: { url: audioURL }},
                      { _attr: { file: audioURL }},
                      { _attr: { medium: 'audio' }},
                      { 'media:title': {
                        _attr: { type: 'plain' },
                        title: sermon.title,
                      }},
                    ]},
                  ],
                  enclosure: {
                    url: audioURL,
                    file: audioURL,
                    size: 1,
                    type: 'audio/mpeg'
                  },
                })
              });
            },
            query: `
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
            }
            `,
            output: '/new-rss.xml',
          }
        ]
      }
    }
)

module.exports = {
  buildRSSPluginOptions,
}