import React from 'react';
import { Heading, Text, Box, Flex, Image } from 'rebass';
import { Link, graphql } from 'gatsby';
import dayjs from 'dayjs';
import slugify from '../../../scripts/slugify';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Button from '../../components/Button';
import TextHero from '../../components/Heroes/TextHero';

import { ContentContainer as Container } from '../../components/Layout/Layout.styles';
import dayUtil from '../../utils/day';

const EventsList = ({ events }) => {
  // TODO: Turn this into an "EventCard" component
  return events.map(({ node }, index) => {
    // generate the date text:
    //  - if we have an end date AND the end date does not match the start date, display a date range
    //  - if we do not have an end date OR we have an end date AND it matches the start date, display the full start date
    const dateText = dayUtil.getDateText(node);

    const eventLink = `/events/${dayjs(node.date).format('YYYY/MM')}/${slugify(
      node.eventName
    )}`;
    return (
      <Flex key={index} flexDirection={['column', 'row']} mb="1rem">
        <Box width={['100%', '50%']}>
          <Image src={node.eventImage.fluid.src} alt={node.eventImage.title} />
        </Box>
        <Flex
          flexDirection="column"
          alignItems={['center', 'flex-start']}
          justifyContent="center"
          p="1rem"
          width={['100%', '50%']}
        >
          <Link to={eventLink}>
            <Heading fontSize={5} style={{ textAlign: 'center' }}>
              {node.eventName}
            </Heading>
          </Link>
          <Text fontSize={1}>{dateText}</Text>
          <Text my="0.5rem">{node.eventSummary}</Text>
          <Link to={eventLink}>
            <Button small>View Details</Button>
          </Link>
        </Flex>
      </Flex>
    );
  });
};

const EventsPage = (props) => {
  const { events } = props.data;
  // check to see if we have events that haven't passed yet
  const eventsInFuture = events.edges.filter((event) =>
    dayUtil.isInFuture(event)
  );

  return (
    <Layout>
      <SEO title="Events" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <TextHero useMargin>
          <Heading fontSize={6} color="primary">
            Upcoming Events
          </Heading>
        </TextHero>
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
          <EventsList events={eventsInFuture} />
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
