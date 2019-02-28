import React from 'react';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    {/* hero goes here */}
    <Heading>About Page</Heading>
  </Layout>
);

export default AboutPage;
