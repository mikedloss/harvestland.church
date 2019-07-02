import React from 'react';
import { Heading, Text, Flex } from 'rebass';
import { Link, graphql } from 'gatsby';

import { Layout, SEO, Button, Hero, Container, EventCard } from '../components';

import dayUtil from '../utils/day';

const SEOKeywords = [
  'harvestland',
  'harvestland church',
  'harvestland church events',
  'clarkston events',
  'michigan events',
  'church events',
  'volunteer events',
  'events'
]

const EventsPage = (props) => {
  const { events } = props.data;
  // check to see if we have events that haven't passed yet
  const eventsInFuture = events.edges.filter((event) =>
    dayUtil.isInFuture(event)
  );

  return (
    <Layout>
      <SEO title="Events" keywords={SEOKeywords} />
      <Container>
        <Hero.Text useMargin>
          <Heading fontSize={6} color="primary">
            Upcoming Events
          </Heading>
        </Hero.Text>
        <Flex
          flexDirection="column"
          alignItems="center"
          mb="2rem"
          mx="auto"
          width="80%"
        >
          <Text>
            In addition to the events listed below, our{' '}
            <Heading as="span" fontSize={3} color="primary">
              Build
            </Heading>{' '}
            groups meet regularly. Join a group that you're interested in!
          </Text>
          <Link to="/groups">
            <Button mt="1rem" variant="inverse">
              Visit Groups Page
            </Button>
          </Link>
        </Flex>
        <hr />
        {events && eventsInFuture.length ? (
          eventsInFuture.map(({ node }) => (
            <EventCard key={node.eventName} event={node} />
          ))
        ) : (
          <Flex justifyContent="center" mx="auto" width="80%">
            <Text>
              No upcoming events listed, but join us at one of our{' '}
              <Heading as="span" fontSize={3} color="primary">
                Build
              </Heading>{' '}
              group meetings!
            </Text>
          </Flex>
        )}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    events: allContentfulEvent(sort: { fields: [date], order: ASC }) {
      edges {
        node {
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
            fluid(maxWidth: 1600, quality: 100) {
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
    }
  }
`;

export default EventsPage;
