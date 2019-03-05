import React from 'react';
import { Heading, Text, Flex, Button, Box } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { graphql } from 'gatsby';

import { ContentContainer as Container } from '../../components/Layout/Layout.styles';
import TextHero from '../../components/Heroes/TextHero';
import Side2SideHero from '../../components/Heroes/Side2SideHero';

const GivePage = (props) => {
  const { image } = props.data;
  return (
    <Layout>
      <SEO title="Give" keywords={[`gatsby`, `application`, `react`]} />
      <TextHero>
        <Text as="p">Generosity</Text>
        <Text as="span" fontSize={5}>🙏</Text>
      </TextHero>
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
              <Button
                py="20px"
                px="36px"
                fontSize={4}
                borderColor="primary"
                border="4px solid"
                borderRadius="0"
                bg="white"
                color="primary"
              >
                Give Online
              </Button>
            </a>
          </Box>
        </Flex>
        {/* image of someone on phone */}
      </Container>

      {/* explain what is tithing (use bible photo) */}
      <Side2SideHero
        heroText="What is Tithing?"
        imageSrc={image.childImageSharp.fluid.src}
        height="60vh"
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
      </Side2SideHero>

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
      <TextHero color="black">Still have questions?</TextHero>
      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text>send us an email at </Text>
          <a href="mailto:giving@harvestland.church" rel="noopener noreferrer">
            giving@harvestland.church
          </a>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    image: file(relativePath: { eq: "images/give-header.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default GivePage;
