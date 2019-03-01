import React from 'react';
import { Heading, Text, Flex, Button, Box } from 'rebass';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { graphql } from 'gatsby';
// import ImageHero from '../../components/Heroes/ImageHero';

import { ContentContainer as Container } from '../../components/Layout/Layout.styles';
import TextHero from '../../components/Heroes/TextHero';
import Side2SideHero from '../../components/Heroes/Side2SideHero';

const GivePage = (props) => {
  const { image } = props.data;
  return (
    <Layout>
      <SEO title="Give" keywords={[`gatsby`, `application`, `react`]} />
      <TextHero />
      <Container>
        <Flex flexDirection="column" alignItems="center">
          <Box width="100%" px={['2rem', '4rem']}>
            <Text>
              The Bible gives us many references what Jesus thinks about
              competing interests. In{' '}
              <a
                href="https://www.bible.com/bible/116/MAT.6.24.NLT"
                target="_blank"
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
            <a href="https://tithe.ly/give?c=9749" target="_blank">
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
        heroText="words"
        imageSrc={image.childImageSharp.fluid.src}
        height="60vh"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        molestie, enim in aliquam egestas, nibh diam tristique metus, vel
        consequat libero orci nec neque. Quisque aliquam massa sed lectus
        porttitor, vitae blandit urna vehicula. Proin leo sem, sagittis sit amet
        convallis non, condimentum nec lacus. Nulla facilisi. In accumsan lacus
        sit amet interdum eleifend. Sed odio libero, varius non placerat non,
        aliquam vel ipsum. Curabitur rutrum iaculis eros, id egestas ex maximus
        in. Etiam et augue ut enim tristique feugiat.
      </Side2SideHero>

      {/* faq section */}
      <Container />

      <Container>
        <Flex flexDirection="column" my="2rem">
          <Heading>It's Safe</Heading>
          <Text>
            The data you enter in is done so on a secure webpage, meaning you're
            in the likes of thousands of other online shops. Less people will
            see your information than if you were to use paper checks or the
            mailing system.
          </Text>
        </Flex>
        <Flex flexDirection="column" my="2rem">
          <Heading>It's Flexible</Heading>
          <Text>
            We give the option to do a one time gift, or you can see up a
            recurring gift on a schedule that fits your life. We also give you
            the choice to give to specific groups or funds we're currently
            raising money for, so your gift will get to the right group.
          </Text>
        </Flex>
        <Flex flexDirection="column" my="2rem">
          <Heading>It Supports Our Mission</Heading>
          <Text>
            Your giving directly supports the families and guests that come
            through our doors every single day. Your generosity makes it
            possible for us to impact children, students and adults through our
            ministry events. You allow us to support missionaries all over the
            world, reaching people we wouldn't normally be able to reach inside
            our building.
          </Text>
        </Flex>
      </Container>

      {/* still have questions? */}
      <TextHero text="Still have questions?" color="black" />
      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text>send us an email at </Text>
          <a href="mailto:email">email@email.com</a>
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
