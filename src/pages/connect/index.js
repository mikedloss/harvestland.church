import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Heading } from 'rebass';

import Layout from '../../components/Layout';
import Image from '../../components/Image';
import SEO from '../../components/SEO';

// import FrontVideoHero from '../components/Heroes/FrontVideoHero';

const ConnectPage = () => (
  <Layout>
    <SEO title="Connect" keywords={[`gatsby`, `application`, `react`]} />
    {/* hero goes here */}
    <Heading>Connect Page</Heading>
  </Layout>
);

export default ConnectPage;
