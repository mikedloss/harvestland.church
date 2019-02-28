import React from 'react';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ImageHero from '../../components/Heroes/ImageHero';

const SermonsPage = () => (
  <Layout>
    <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
    <ImageHero imageSrc="http://via.placeholder/350" />
    <Heading>Sermons Page</Heading>
  </Layout>
);

export default SermonsPage;
