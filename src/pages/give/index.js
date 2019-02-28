import React from 'react';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const GivePage = () => (
  <Layout>
    <SEO title="Give" keywords={[`gatsby`, `application`, `react`]} />
    {/* hero goes here */}
    <Heading>Give Page</Heading>
  </Layout>
);

export default GivePage;
