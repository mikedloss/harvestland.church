const fs = require('fs');
const rp = require('request-promise');
const slugify = require('./slugify');

const STATIC_PATH = './static';
const RSS_PATH = `${STATIC_PATH}/rss.xml`;

exports.writeRSS = async (sermons) => {
  console.log(`TRUNCATING ${ RSS_PATH }`);
  fs.truncateSync(RSS_PATH);

  console.log(`WRITING TO ${RSS_PATH}`);
  fs.writeFileSync(
    RSS_PATH, `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:media="http://www.rssboard.org/media-rss" xmlns:wfw="http://wellformedweb.org/CommentAPI/" version="2.0">
  <channel>
    <title>Harvestland Church</title>
    <link>https://www.harvestland.church/sermons/</link>
    <lastBuildDate>${new Date().toGMTString()}</lastBuildDate>
    <language>en-US</language>
    <generator>custom node script</generator>
    <itunes:author>Harvestland Church</itunes:author>
    <itunes:subtitle>Clarkston, MI</itunes:subtitle>
    <itunes:summary>Thanks for joining us this week at Harvestland Church! Make sure to check back for more inspirational messages from our Pastor Pete Freeman and other guests. Visit our website at http://harvestland.church to find out more or to visit us in person.</itunes:summary>
    <description>Thanks for joining us this week at Harvestland Church! Make sure to check back for more inspirational messages from our Pastor Pete Freeman and other guests. Visit our website at http://harvestland.church to find out more or to visit us in person.</description>
    <itunes:explicit>no</itunes:explicit>
    <itunes:owner>
    <itunes:name>Mike DLoss</itunes:name>
    <itunes:email>mike@harvestland.church</itunes:email>
    </itunes:owner>
    <itunes:category text="Religion &amp; Spirituality">
    <itunes:category text="Christianity" />
    </itunes:category>
    <copyright>Harvestland Church</copyright>
    <itunes:type>episodic</itunes:type>
    <itunes:image href="http://images.ctfassets.net/m1p6j93uez0z/76ZAUPkA49dUK0lCTZJGru/7ef8149009c2c5c1f8447048855f2900/podcast-icon.png" />
`
  );

  await asyncForEach(sermons, async ({ node }) => {
    console.log(`LOOKING AT ${ node.title }`);
    const data = node;
    const sermonPath = `/sermons/${ slugify(node.date, "/") }/${ slugify(node.title) }`;
    
    const audioURL = data.audio
      ? data.audio.file.url
      : data.audioURL
    
    const audioRequest = await rp({
      url: `https:${ audioURL }`,
      method: "HEAD"
    });

    console.log(`WRITING ${ node.title }`);
    fs.appendFileSync(
      RSS_PATH, `    <item>
      <title>${ data.title }</title>
      <dc:creator>Mike DLoss</dc:creator>
      <pubDate>${ new Date(data.date).toGMTString() }</pubDate>
      <link>https://www.harvestland.church${ sermonPath }</link>
      <guid isPermaLink="false">${ data.id }</guid>
      <description><![CDATA[<p>${ data.verses }</p>]]></description>
      <itunes:author>${ data.speaker }</itunes:author>
      <itunes:explicit>no</itunes:explicit>
      <itunes:duration>${ data.duration }</itunes:duration>
      <itunes:image href="http://images.ctfassets.net/m1p6j93uez0z/76ZAUPkA49dUK0lCTZJGru/7ef8149009c2c5c1f8447048855f2900/podcast-icon.png" />
      <itunes:title>${ data.title }</itunes:title>
      <content:encoded />
      <enclosure url="${ audioURL }" length="${ audioRequest['content-length'] }" type="audio/mpeg" />
      <media:content url="${ audioURL }" length="${ audioRequest['content-length'] }" type="audio/mpeg" isDefault="true" medium="audio">
        <media:title type="plain">${ data.title }</media:title>
      </media:content>
    </item>
`);
  })

  console.log(`FINISHING`);
  fs.appendFileSync(
    RSS_PATH, `  </channel>
</rss>`
  )
}

exports.beginningXML = () => {
  console.log(`${STATIC_PATH}/rss.xml`);
  fs.truncateSync(`${STATIC_PATH}/rss.xml`);
  fs.writeFileSync(
    `${STATIC_PATH}/rss.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:media="http://www.rssboard.org/media-rss" xmlns:wfw="http://wellformedweb.org/CommentAPI/" version="2.0">
  <channel>
    <title>Harvestland Church</title>
    <link>https://www.harvestland.church/sermons/</link>
    <lastBuildDate>${new Date().toGMTString()}</lastBuildDate>
    <language>en-US</language>
    <generator>sadboyz-app</generator>
    <itunes:author>Harvestland Church</itunes:author>
    <itunes:subtitle>Clarkston, MI</itunes:subtitle>
    <itunes:summary>Thanks for joining us this week at Harvestland Church! Make sure to check back for more inspirational messages from our Pastor Pete Freeman and other guests. Visit our website at http://harvestland.church to find out more or to visit us in person.</itunes:summary>
    <description>Thanks for joining us this week at Harvestland Church! Make sure to check back for more inspirational messages from our Pastor Pete Freeman and other guests. Visit our website at http://harvestland.church to find out more or to visit us in person.</description>
    <itunes:explicit>no</itunes:explicit>
    <itunes:owner>
    <itunes:name>Mike DLoss</itunes:name>
    <itunes:email>mike@harvestland.church</itunes:email>
    </itunes:owner>
    <itunes:category text="Religion &amp; Spirituality">
    <itunes:category text="Christianity" />
    </itunes:category>
    <copyright>Harvestland Church</copyright>
    <itunes:type>episodic</itunes:type>
    <itunes:image href="http://images.ctfassets.net/m1p6j93uez0z/76ZAUPkA49dUK0lCTZJGru/7ef8149009c2c5c1f8447048855f2900/podcast-icon.png" />
`
  );
}

exports.writeSermonXML = async (data, path) => {
  const audioURL = data.audio
    ? data.audio.file.url
    : data.audioURL
  
  const audioRequest = await rp({
    url: `https:${ audioURL }`,
    method: "HEAD"
  });

  fs.appendFileSync(
    `${STATIC_PATH}/rss.xml`, `
    <item>
      <title>${ data.title }</title>
      <dc:creator>Mike DLoss</dc:creator>
      <pubDate>${ new Date(data.date).toGMTString() }</pubDate>
      <link>https://www.harvestland.church${ path }</link>
      <guid isPermaLink="false">${ data.id }</guid>
      <description><![CDATA[<p>${ data.verses }</p>]]></description>
      <itunes:author>${ data.speaker }</itunes:author>
      <itunes:explicit>no</itunes:explicit>
      <itunes:duration>${ data.duration }</itunes:duration>
      <itunes:image href="http://images.ctfassets.net/m1p6j93uez0z/76ZAUPkA49dUK0lCTZJGru/7ef8149009c2c5c1f8447048855f2900/podcast-icon.png" />
      <itunes:title>${ data.title }</itunes:title>
      <content:encoded />
      <enclosure url="${ audioURL }" length="${ audioRequest['content-length'] }" type="audio/mpeg" />
      <media:content url="${ audioURL }" length="${ audioRequest['content-length'] }" type="audio/mpeg" isDefault="true" medium="audio">
        <media:title type="plain">${ data.title }</media:title>
      </media:content>
    </item>`
  )
}

exports.endXML = async () => {
  fs.appendFileSync(
    `${STATIC_PATH}/rss.xml`, `  </channel>
</rss>`
  )
}

const asyncForEach = async (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    await cb(array[i], i, array);
  }
}