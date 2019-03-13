import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ description, lang, keywords, title }) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
        }
      }
      image: file(relativePath: { eq: "images/seo-image.jpg" }) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `);

  const pageTitle = `${title} | Harvestland Church`;
  const metaDescription = description || data.site.siteMetadata.description;
  const imageLink = `https://harvestland.church${
    data.image.childImageSharp.fixed.src
  }`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={imageLink} />

      {/* Open Graph */}
      {/* <meta property="og:url" content="" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageLink} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@harvestlandchurch_ob" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageLink} />

      {/* meta keywords */}
      <meta name="keywords" content={keywords.join(', ')} />

      {/* favicons */}
      {/* <link rel="icon" type="image/png" href={favicon192} /> */}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
