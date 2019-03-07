import React from 'react';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const GroupsPage = () => (
  <Layout>
    <SEO title="Groups" keywords={[`gatsby`, `application`, `react`]} />
    {/* hero goes here */}
    <Heading>Groups Page</Heading>
  </Layout>
);

export default GroupsPage;
