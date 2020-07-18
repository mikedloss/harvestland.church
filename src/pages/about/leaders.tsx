import React from 'react';
import { Heading, Flex } from 'rebass';

import { Layout, SEO, Hero, LeaderInfo, Container } from '../../components';
import { useLeadersPageQuery } from '../../queries';

const LeadersPage: React.FC = () => {
  const { heroImage, ...leaders } = useLeadersPageQuery();
  return (
    <Layout>
      <SEO
        title="Leaders"
        keywords={['harvestland church leaders', 'leaders']}
      />
      <Hero.Image imageSrc={heroImage} height={['40vh', '50vh']}>
        <Heading p="20px" fontSize={[5, 6]}>
          Our Leaders
        </Heading>
      </Hero.Image>
      <Container>
        <Flex flexDirection="column" alignItems="center">
          {Object.keys(leaders).map((leader) => (
            <LeaderInfo who={leaders[leader]} key={leader} />
          ))}
        </Flex>
      </Container>
    </Layout>
  );
};

export default LeadersPage;
