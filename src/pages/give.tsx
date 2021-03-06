import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';

import { Layout, SEO, Container, Hero, Button } from '../components';
import { useGivePageQuery } from '../queries';

const GivePage: React.FC = () => {
  const { image } = useGivePageQuery();
  return (
    <Layout>
      <SEO title="Give" keywords={['charity', 'help']} />
      <Hero.Text>
        <Heading as="h1" fontSize={6} color="primary">
          Generosity
        </Heading>
        <Text fontSize={5}>
          <span role="img" aria-label="praying hands">
            🙏
          </span>
        </Text>
      </Hero.Text>
      <Container>
        <Flex flexDirection="column" alignItems="center">
          <Box width="100%" px={['2rem', '4rem']}>
            <Text>
              The Bible gives us many references what Jesus thinks about
              competing interests. In{' '}
              <a
                href="https://www.bible.com/bible/116/MAT.6.24.NLT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Matthew 6:24
              </a>
              , Jesus tells us that we cannot worship two masters. Giving to the
              local church demonstrates that He is greater than material things
              in our lives. Your giving directly impacts Harvestland's potential
              to change the world.
            </Text>
          </Box>
          <Box m="2rem">
            <a
              href="https://tithe.ly/give?c=9749"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="inverse" p="1rem 2rem">
                Give Online
              </Button>
            </a>
          </Box>
        </Flex>
        {/* image of someone on phone */}
      </Container>

      {/* explain what is tithing (use bible photo) */}
      <Hero.Side2Side
        heroText="What is Tithing?"
        imageSrc={image}
        height={['40vh', '60vh']}
      >
        <p>
          Tithing in the bible was an offering from the Law of Moses that
          required 10 percent of "firstfruits" be given to God, because He
          provided the harvests. It was a reminder that everything we have is
          because of Him. This 10 percent was also used to provide for festivals
          and the community.
        </p>
        <p>
          We tithe today because we want to show God how we dedicate the
          blessings and provisions He gives us every day, not just with words
          but with action!
        </p>
      </Hero.Side2Side>

      {/* faq section */}
      <Container>
        <Flex my="2rem" alignItems="center" justifyContent="center">
          <Heading fontSize={6}>Have Questions?</Heading>
        </Flex>
        <Flex flexDirection="column" mb="2rem">
          <Heading>Is it safe?</Heading>
          <Text>
            The data you enter in is done so on a secure webpage, meaning you're
            in the likes of thousands of others who enter their payment
            information online. Less people will see your information than if
            you were to use paper checks or the mailing system.
          </Text>
        </Flex>
        <Flex flexDirection="column" my="2rem">
          <Heading>Can I choose where my money goes?</Heading>
          <Text>
            Yes! We regularly update our giving "buckets" to make sure you can
            choose specifically where you want your gift to go. We also provide
            a note section to tell the staff more specifically where you want
            your gift to go.
          </Text>
        </Flex>
        <Flex flexDirection="column" my="2rem">
          <Heading>How can I see my giving history?</Heading>
          <Text>
            We use a third party service called Tithe.ly that handles our online
            giving. As long as you have created an account through them and used
            that account to give to Harvestland Church, you can log in to your
            Tithe.ly account to view your giving history.
          </Text>
        </Flex>
        <Flex flexDirection="column" my="2rem">
          <Heading>What other options do I have to give?</Heading>
          <Text>
            You can give <strong>during our service</strong> when we give our
            offering during our time of worship. You can also{' '}
            <strong>mail a check</strong> to our church. Our address is below:
          </Text>
          <Flex flexDirection="column" alignItems="center" mt="2rem">
            <Text>Harvestland Church</Text>
            <Text>5848 Clintonville Road</Text>
            <Text>Clarkston, MI 48348</Text>
          </Flex>
        </Flex>
      </Container>

      {/* still have questions? */}
      <Hero.Text>
        <Heading fontSize={6} color="black" mb="2rem">
          Still have questions?
        </Heading>
        <Text>send us an email at </Text>
        <a href="mailto:info@harvestland.church" rel="noopener noreferrer">
          info@harvestland.church
        </a>
      </Hero.Text>
    </Layout>
  );
};

export default GivePage;
