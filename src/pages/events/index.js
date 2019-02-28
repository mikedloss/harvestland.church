import React from 'react';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const EventsPage = () => (
  <Layout>
    <SEO title="Events" keywords={[`gatsby`, `application`, `react`]} />
    {/* hero goes here */}
    <Heading>Events Page</Heading>
  </Layout>
);

export default EventsPage;
