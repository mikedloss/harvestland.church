import React from 'react';
import { Flex, Text, Heading, Image, Box } from 'rebass';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TextHero from '../components/Heroes/TextHero';
import Button from '../components/Button';

import * as Media from '../components/Elements/media';
import { ContentContainer as Container } from '../components/Layout/Layout.styles';
import dayUtils from '../utils/day';

const SermonPostTemplate = (props) => {
  const { event } = props.data;
  console.log(event);
  return (
    <Layout>
      <SEO title="Sermons" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          mx="auto"
          width={['100%', '70%']}
        >
          <Box>
            <TextHero>
              <Heading fontSize={6} color="black">
                {event.eventName}
              </Heading>
              <Text>{dayUtils.getDateText(event)}</Text>
            </TextHero>
            <Image
              src={event.eventImage.fluid.src}
              alt={event.eventImage.title}
            />
          </Box>
          <Flex flexDirection={['column', 'row']}>
            <Flex
              flexDirection="column"
              width={['100%', '65%']}
              my="2rem"
              mr="2rem"
            >
              <Text style={{ fontStyle: 'italic' }} mb="1rem">
                {event.eventSummary}
              </Text>
              <Text
                dangerouslySetInnerHTML={{
                  __html: event.eventDescription.childMarkdownRemark.html,
                }}
              />
            </Flex>
            <Flex flexDirection="column" width={['100%', '35%']} my="2rem">
              <Heading fontSize={2}>Location</Heading>
              <Text
                dangerouslySetInnerHTML={{
                  __html: event.eventAddress.childMarkdownRemark.html,
                }}
              />
              {event.ticketLink && (
                <Text
                  mt="1rem"
                  as="a"
                  href={event.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Get Tickets</Button>
                </Text>
              )}
              {event.facebookEventLink && (
                <Text
                  mt="1rem"
                  as="a"
                  href={event.facebookEventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>View Event on Facebook</Button>
                </Text>
              )}
            </Flex>
          </Flex>
          <Box width="100%">
            <Link to="/events">
              <Text fontSize={2}>Return to all events</Text>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    event: contentfulEvent(id: { eq: $id }) {
      eventName
      date
      endDate
      eventAddress {
        childMarkdownRemark {
          html
        }
      }
      eventImage {
        title
        fluid(maxWidth: 1600) {
          src
        }
      }
      eventSummary
      eventDescription {
        childMarkdownRemark {
          html
        }
      }
      isFrontPage
      facebookEventLink
      ticketLink
    }
  }
`;

export default SermonPostTemplate;
